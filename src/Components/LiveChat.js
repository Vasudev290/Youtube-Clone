import { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Slices/liveChatSlice";
import {
  genarateRandomNameList,
  makeRandomMessage,
  randomEmojiGenarated,
} from "../utils/randomNames";

const LiveChat = () => {
  //local state Variable
  const [liveMessage, setLiveMessage] = useState("");

  //Dispatch
  const dispatch = useDispatch();

  //useSelector
  const chatMessages = useSelector((state) => state.chat.message);

  //useEffect api polling
  useEffect(() => {
    const inter = setInterval(() => {
      //api polling data
      dispatch(
        addMessage({
          name: genarateRandomNameList(),
          message: makeRandomMessage(25) + randomEmojiGenarated(),
        })
      );
    }, 1500);
    return () => clearInterval(inter);
  }, []);
  return (
    <>
      <div className="w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <LiveChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vasu",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className=" px-2 flex-grow"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
