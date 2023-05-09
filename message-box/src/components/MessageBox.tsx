import data from "../assets/data";
import MessageContent from "./MessageContent";

const MessageBox = () => {
  return (
    <div className="mt-5 px-5 overflow-scroll w-full h-full flex flex-col justify-between items-center gap-8 overflow-x-hidden">
      {data.map((message) => (
        <MessageContent message={message} />
      ))}
    </div>
  );
};

export default MessageBox;
