export default function ScrollProgress() {
  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-50 pointer-events-none opacity-20">
      <span className="text-[8px]">▲</span>
      <div className="h-24 w-px bg-white"></div>
      <span className="text-[8px]">▼</span>
    </div>
  );
}
