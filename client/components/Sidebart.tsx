import { Search, Sparkles } from "lucide-react";
import { type FC } from "react";

interface Sidebarcont {
  img: string;
  name: string;
  username: string;
  lastmessage: string;
  date: string | number;
}

const Sidebart: FC = () => {
  return (
    <div className="h-screen w-[347px] bg-[#FAFAFA]">
      <div className="flex flex-row justify-start items-center text-[#141414] font-[Axiforma] font-semibold gap-1 text-[24px] p-3">
        <Sparkles size={28} strokeWidth={1.5} color="#21978B" />
        <p>Glare</p>
      </div>
      <div className="flex flex-col gap-4">
        <div>Messages</div>
        <div className="rounded-3xl h-10 w-[90%] px-5 mx-auto flex flex-row justify-start items-center gap-2 bg-white">
          <Search strokeWidth={1} />
          <input
            type="search"
            name="search"
            id=""
            placeholder="search people or messages"
            className="border-0 outline-none bg-transparent w-[85%] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

const Sidebardisplay: Sidebarcont[] = [
  {
    img: "",
    name: "",
    username: "",
    lastmessage: "",
    date: "",
  },
  {
    img: "",
    name: "",
    username: "",
    lastmessage: "",
    date: "",
  },
  {
    img: "",
    name: "",
    username: "",
    lastmessage: "",
    date: "",
  },
  {
    img: "",
    name: "",
    username: "",
    lastmessage: "",
    date: "",
  },
  {
    img: "",
    name: "",
    username: "",
    lastmessage: "",
    date: "",
  },
  {
    img: "",
    name: "",
    username: "",
    lastmessage: "",
    date: "",
  },
];
export default Sidebart;
