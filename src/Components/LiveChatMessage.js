import { UserRound } from "lucide-react";

const LiveChatMessage = (props) => {
  const { name, message } = props;
  return (
    <div className="flex items-center shadow-md p-2 gap-2 hover:bg-gray-200">
      <UserRound className="h-7 w-7 cursor-pointer text-blue-600 hover:text-blue-700" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default LiveChatMessage;
