import image1 from "../assets/images/1.webp";

interface props {
  message: {
    imgSrc: string;
    name: string;
    text: string;
  };
}

const MessageContent = (props: props) => {
  const { message } = props;
  return (
    <article className="w-full flex justify-between items-center gap-6">
      <div className="w-1/4 rounded-full h-full">
        <img
          src={message.imgSrc}
          alt={message.name}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="w-3/4 flex flex-col justify-evenly">
        <h3 className="font-bold">{message.name}</h3>
        <p>{message.text}</p>
      </div>
    </article>
  );
};

export default MessageContent;
