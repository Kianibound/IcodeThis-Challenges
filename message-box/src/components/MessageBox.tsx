import data from "../assets/data";
import MessageContent from "./MessageContent";

const MessageBox = () => {
  return (
    <div>
      {data.map((message) => (
        <MessageContent message={message} />
      ))}
    </div>
  );
};

export default MessageBox;
