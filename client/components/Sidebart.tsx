import { Sparkles } from "lucide-react";


const Sidebart = () => {
  return (
    <div className="h-screen w-[347px] hover:hidden bg-[#FAFAFA]">
      <div className="flex flex-row justify-start items-center text-[#141414] font-[Axiforma] font-semibold gap-1 text-[24px] p-3">
        <Sparkles size={28} strokeWidth={1.5} color="#21978B" />
        <p>Glare</p>
      </div>
    </div>
  );
};
export default Sidebart;
