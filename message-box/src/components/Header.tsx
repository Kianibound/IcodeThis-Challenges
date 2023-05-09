import { BsFillGearFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="h-1/6 pb-2 flex justify-between items-center border-b-2 border-b-neutral-400 w-11/12">
        <span className="text-lg">Messages</span>
        <span className="text-3xl text-gray-400">
          <BsFillGearFill />
        </span>
      </div>

      <div className="px-5 py-2 w-full">
        <input
          type="text"
          className="w-full h-12 rounded-lg bg-slate-100 p-2 outline-none placeholder:font-semibold"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default Header;
