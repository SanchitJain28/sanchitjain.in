import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-4 py-1 h-8 bg-black text-white font-body text-[10px] tracking-widest uppercase border-t border-white border-t-2">
      <div className="text-white">©2024_TERMINAL_PORTFOLIO // [EOF]</div>
      <div className="flex gap-4">
        <Link
          className="text-white/70 hover:text-white hover:underline transition-none"
          href="#"
        >
          SOURCE
        </Link>
        <Link
          className="text-white/70 hover:text-white hover:underline transition-none"
          href="#"
        >
          TWITTER
        </Link>
        <Link
          className="text-white/70 hover:text-white hover:underline transition-none"
          href="#"
        >
          RSS
        </Link>
      </div>
      <div className="hidden md:block">STABLE_BUILD_4.0.1</div>
    </footer>
  );
}
