const page = () => {
  return (
    <div className="flex items-center justify-center h-full font-[Axiforma]">
      <div className="flex flex-col justify-center items-start m-auto w-[50%] gap-4">
        <div className="font-semibold text-2xl w-2/3">You don’t have a message selected.</div>
        <div className="text-xs">Choose one from your existing messages, or start a new one.</div>
        <button className="w-32 h-9 bg-[#21978B] text-xs text-white font-semibold rounded-2xl">New Message</button>
      </div>
    </div>
  );
};
export default page;
