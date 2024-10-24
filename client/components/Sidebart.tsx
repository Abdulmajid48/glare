import { Ellipsis, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import { type FC } from "react";

interface Sidebarcont {
  key?: number;
  img: string;
  name: string;
  username: string;
  lastmessage: string;
  date: string | number;
}

const Sidebart = () => {
  return (
    <div className="h-screen w-[30%] sm:w-[347px] bg-[#FAFAFA] relative pl-2 font-[Axiforma] overflow-y-auto">
      <div className="flex flex-row justify-start items-center text-[#141414] font-semibold gap-1 text-[24px]">
        <Sparkles size={28} strokeWidth={1.5} color="#21978B" />
        <p>Glare</p>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <div className="font-semibold px-5">Messages</div>
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
        <div>
          {Sidebardisplay.map((item, index) => {
            return <Sidebarmessages key={index} {...item} />;
          })}
        </div>
      </div>
      <User />
    </div>
  );
};

const Sidebarmessages: FC<Sidebarcont> = (props) => {
  const { img, name, username, lastmessage, date }: Sidebarcont = props;
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 justify-center sm:items-center font-[Axiforma] text-xs my-4 pl-2 sm:pl-0">
      <div className="m-auto sm:m-0">
        <Image src={img} alt="image" width={20} height={20} />
      </div>
      <div className="flex flex-col sm:items-center justify-center">
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <p className="font-semibold text-sm">{name}</p>
          <p>{username}</p>
        </div>
        <div className="hidden sm:block">{lastmessage}</div>
      </div>
      <div className="text-center">{date}</div>
    </div>
  );
};

const User = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-center text-xs font-[Axiforma] sm:ml-[70px] gap-1 sm:gap-5 absolute bottom-0 sm:bottom-6 pl-2 sm:pl-0">
      <div>
        <Image src="/user.svg" alt="user" width={20} height={20} />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold">Zakk Wylde</div>
        <div>@wyldetheguy</div>
      </div>
      <div>
        <Ellipsis strokeWidth={1.5} />
      </div>
    </div>
  );
};

const Sidebardisplay: Sidebarcont[] = [
  {
    img: "/userimg.svg",
    name: "Suzana Colin",
    username: "@suzana",
    lastmessage: "Chris Martin reacted with love",
    date: "Dec 15",
  },
  {
    img: "/userimg.svg",
    name: "Suzana Colin",
    username: "@suzana",
    lastmessage: "Chris Martin reacted with love",
    date: "Dec 15",
  },
  {
    img: "/userimg.svg",
    name: "Suzana Colin",
    username: "@suzana",
    lastmessage: "Chris Martin reacted with love",
    date: "Dec 15",
  },
  {
    img: "/userimg.svg",
    name: "Suzana Colin",
    username: "@suzana",
    lastmessage: "Chris Martin reacted with love",
    date: "Dec 15",
  },
  {
    img: "/userimg.svg",
    name: "Suzana Colin",
    username: "@suzana",
    lastmessage: "Chris Martin reacted with love",
    date: "Dec 15",
  },
  {
    img: "/userimg.svg",
    name: "Suzana Colin",
    username: "@suzana",
    lastmessage: "Chris Martin reacted with love",
    date: "Dec 15",
  },
];
export default Sidebart;
export { Sidebarmessages };
