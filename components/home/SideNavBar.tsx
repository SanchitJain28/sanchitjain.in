import Link from "next/link";

export default function SideNavBar() {
  return (
    <aside className="fixed left-0 top-10 h-[calc(100%-2.5rem)] w-16 md:w-48 flex flex-col hidden md:flex bg-black text-white font-headline text-xs uppercase border-r border-white border-r-2 z-40">
      <div className="p-4 border-b border-white/20">
        <div className="text-lg font-bold text-white">ROOT_USER</div>
        <div className="text-[10px] opacity-70">[STATUS: ACTIVE]</div>
      </div>
      <nav className="flex-1 mt-4">
        <Link
          className="bg-white text-black font-bold p-2 w-full flex items-center gap-2 mb-1"
          href="#"
        >
          <span className="material-symbols-outlined text-xs">code</span> GITHUB
        </Link>
        <Link
          className="text-white p-2 w-full hover:bg-white/10 flex items-center gap-2 mb-1"
          href="#"
        >
          <span className="material-symbols-outlined text-xs">rebase_edit</span>{" "}
          LINKEDIN
        </Link>
        <Link
          className="text-white p-2 w-full hover:bg-white/10 flex items-center gap-2 mb-1"
          href="#"
        >
          <span className="material-symbols-outlined text-xs">mail</span> EMAIL
        </Link>
      </nav>
      <div className="p-4 border-t border-white/20">
        <button className="w-full text-left hover:invert transition-none">
          [ DOWNLOAD_CV ] →
        </button>
      </div>
    </aside>
  );
}
