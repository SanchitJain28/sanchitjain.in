export default function Contact() {
  return (
    <section className="p-6 md:p-12 border-b-2 border-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-headline text-4xl font-black uppercase mb-6 leading-none">
            LET&apos;S BUILD
            <br />
            THE FUTURE.
          </h2>
          <p className="font-body text-sm mb-8 opacity-70">
            OPEN FOR FREELANCE, COLLABORATIONS, AND FULL-TIME ROLES IN
            HIGH-IMPACT TEAMS.
          </p>
          <div className="space-y-2 font-label">
            <a className="block group" href="mailto:hello@terminal.dev">
              <span className="opacity-50">[ EMAIL ]</span> hello@terminal.dev{" "}
              <span className="group-hover:translate-x-2 inline-block transition-transform">
                →
              </span>
            </a>
            <a className="block group" href="#">
              <span className="opacity-50">[ GITHUB ]</span> /root-user{" "}
              <span className="group-hover:translate-x-2 inline-block transition-transform">
                →
              </span>
            </a>
            <a className="block group" href="#">
              <span className="opacity-50">[ LINKED ]</span> /in/developer{" "}
              <span className="group-hover:translate-x-2 inline-block transition-transform">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white text-black p-8 flex flex-col justify-between border-2 border-white">
          <div className="font-label text-xs mb-4">TERMINAL_INPUT_v1.0</div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="border-b-2 border-black">
              <label className="block text-[10px] font-bold uppercase">
                Subject
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-xl font-bold uppercase placeholder:text-black/20"
                placeholder="NEW_PROJECT_ALPHA"
                type="text"
              />
            </div>
            <div className="border-b-2 border-black">
              <label className="block text-[10px] font-bold uppercase">
                Details
              </label>
              <textarea
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-bold uppercase placeholder:text-black/20"
                placeholder="WRITE_YOUR_MESSAGE_HERE..."
                rows={3}
              ></textarea>
            </div>
            <button className="bg-black text-white w-full py-4 font-bold uppercase hover:bg-black/90 transition-none">
              [ SEND_COMMAND ]
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
