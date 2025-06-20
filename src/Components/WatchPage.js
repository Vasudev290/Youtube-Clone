import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  //Params
  const dispatch = useDispatch();

  //Params
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  //console.log("Video Id From Url :", videoId);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-xl"
          style={{ maxWidth: "90vw", aspectRatio: "14 / 8" }}
        ></iframe>
        </div>
        <div className="w-full">
          <LiveChat/>
        </div>
      </div>
      <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
