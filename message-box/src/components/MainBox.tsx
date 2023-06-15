import Header from "./Header";
import MessageBox from "./MessageBox";

function MainBox() {
  return (
    <div className="bg-slate-100 w-1/3 h-[550px] p-4 rounded-lg flex flex-col items-center">
      <Header />
      <MessageBox />
    </div>
  );
}

export default MainBox;
