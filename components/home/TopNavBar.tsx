import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="flex justify-between items-center w-full px-2 py-1 h-10 bg-black text-white font-headline uppercase tracking-tighter text-sm font-bold docked full-width top-0 border-b border-white border-b-2 fixed z-50">
      <div className="text-xl font-black text-white tracking-[-0.05em]">
        DEV_MANIFEST_v1.0
      </div>
      <div className="hidden md:flex gap-4">
        <Link className="text-black bg-white px-1" href="#projects">
          PROJECTS
        </Link>
        <Link
          className="text-white hover:bg-white hover:text-black transition-none"
          href="#skills"
        >
          SKILLS
        </Link>
        <Link
          className="text-white hover:bg-white hover:text-black transition-none"
          href="#archive"
        >
          ARCHIVE
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">terminal</span>
      </div>
    </nav>
  );
}
