import { FaRegFileImage } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-blue-100 overflow-hidden">
      <div className="bg-white md:w-2/4 rounded-lg shadow-[0_0_35px_rgba(30,119,204,0.3)] flex flex-col justify-center gap-8 h-3/5 p-6">
        <div className="rounded-xl border-2 border-[#1E77CC] border-dashed flex flex-col justify-center items-center grow cursor-pointer p-6">
          <img
            src="/upload-cloud.png"
            alt="upload cloud img"
            className="w-36"
          />
          <p className="text-black text-5xl font-normal">
            Browse Files to upload
          </p>
        </div>
        <div className=" flex justify-between items-center bg-blue-100 rounded-xl px-4 py-3">
          <FaRegFileImage className="w-9 h-9 text-blue-500" />
          <span className="flex justify-center items-center text-2xl">
            No selected file - <MdDelete />
          </span>
        </div>
      </div>
    </div>
  );
};
export default App;
