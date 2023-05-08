import { BsFillGearFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="h-1/6 pb-2 flex justify-between items-center border-b-2 border-b-neutral-400 w-11/12">
      <span className="text-lg">Messages</span>
      <span className="text-3xl text-gray-400">
        <BsFillGearFill />
      </span>
    </div>
  );
};

export default Header;
