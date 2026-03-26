import Link from "next/link";

const projectData = [
  {
    id: "01",
    title: "NEURAL_DASHBOARD",
    desc: "AI-driven analytics engine for terminal-based data streams.",
    tags: ["REACT", "PYTHON", "WEBSOCKETS"],
  },
  {
    id: "02",
    title: "VOID_PROTOCOL",
    desc: "End-to-end encrypted messaging layer for decentralized apps.",
    tags: ["NODE.JS", "RUST", "P2P"],
  },
  {
    id: "03",
    title: "SYNTH_CSS_v2",
    desc: "Brutalist framework for modern high-performance layouts.",
    tags: ["TYPESCRIPT", "POSTCSS"],
  },
  {
    id: "04",
    title: "KERNEL_ARCHIVE",
    desc: "Cloud-native file storage system with ASCII visualizer.",
    tags: ["AWS", "NEXTJS", "S3"],
  },
];

export default function Projects() {
  return (
    <section className="p-6 md:p-12 border-b-2 border-white" id="projects">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-headline text-4xl font-black uppercase tracking-tighter">
          ┌─ PROJECTS ─┐
        </h2>
        <div className="font-label text-[10px] tracking-widest hidden md:block">
          QTY: 04 // FILTER: ALL
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white border-2 border-white">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-black p-6 group hover:bg-white hover:text-black transition-none"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-label text-xs">[ {project.id} ]</span>
              <span className="material-symbols-outlined group-hover:invert">
                open_in_new
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-2">
              {project.title}
            </h3>
            <p className="font-body text-sm mb-6 opacity-80 group-hover:opacity-100">
              {project.desc}
            </p>
            <div className="font-label text-[10px] flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-current px-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          className="inline-block border-2 border-white px-8 py-2 font-bold hover:bg-white hover:text-black transition-none"
          href="#"
        >
          VIEW_FULL_ARCHIVE →
        </Link>
      </div>
    </section>
  );
}
