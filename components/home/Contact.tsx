"use client";
export default function Contact() {
  return (
    <section
      className="p-6 md:p-12 lg:p-24 bg-[#FFFFFF] text-surface border-surface"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-surface block"></span>
              INITIATE CONTACT
            </span>
            <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase mb-8 leading-[0.85] tracking-tighter">
              LET&apos;S BUILD <br /> THE FUTURE.
            </h2>
            <p className="font-['Inter'] text-lg md:text-xl font-medium max-w-md mb-16 leading-tight">
              OPEN FOR FREELANCE, COLLABORATIONS, AND FULL-TIME ROLES IN
              HIGH-IMPACT TEAMS.
            </p>
          </div>

          <div className="flex flex-col gap-0  border-surface">
            {[
              {
                label: "EMAIL",
                value: "sanchitjain000028@gmail.com",
                href: "mailto:sanchitjain000028@gmail.com",
              },
              {
                label: "GITHUB",
                value: "/sanchitjain28",
                href: "https://github.com/SanchitJain28",
              },
              {
                label: "LINKEDIN",
                value: "/in/sanchitjain",
                href: "https://www.linkedin.com/in/sanchitjain28",
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="group flex flex-col md:flex-row md:items-center justify-between border-b-2 border-surface py-6 hover:bg-surface hover:text-[#FFFFFF] transition-none px-4 -mx-4 md:px-0 md:mx-0"
              >
                <span className="font-mono text-xs font-bold tracking-widest uppercase mb-2 md:mb-0">
                  {link.label}
                </span>
                <span className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold uppercase tracking-tighter flex items-center gap-4">
                  {link.value}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform group-hover:translate-x-2 transition-transform duration-100"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-surface text-[#FFFFFF] p-8 md:p-12 lg:p-16 flex flex-col justify-between h-full min-h-150 -mx-8">
          <div className="font-mono text-xs font-bold uppercase tracking-widest mb-12 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FFFFFF] block"></span>
            DIRECT MESSAGE
          </div>

          <form
            className="flex-1 flex flex-col gap-12"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* SUBJECT INPUT */}
            <div className="relative group">
              <label className="block font-mono text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">
                SUBJECT LINE
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-[#FFFFFF] p-0 pb-3 focus:ring-0 focus:outline-none focus:border-b-4 text-xl md:text-2xl font-['Space_Grotesk'] font-bold uppercase placeholder:text-white/30 transition-all duration-100 rounded-none"
                placeholder="ENTER SUBJECT"
                type="text"
              />
            </div>

            {/* DETAILS TEXTAREA */}
            <div className="relative group flex-1 flex flex-col">
              <label className="block font-mono text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">
                MESSAGE DETAILS
              </label>
              <textarea
                className="w-full h-full min-h-37.5 flex-1 bg-transparent border-0 border-b-2 border-[#FFFFFF] p-0 pb-3 focus:ring-0 focus:outline-none focus:border-b-4 text-lg font-['Inter'] font-medium placeholder:text-white/30 transition-all duration-100 rounded-none resize-none"
                placeholder="PROVIDE PROJECT DETAILS..."
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button className="w-full bg-[#FFFFFF] text-surface py-6 font-['Space_Grotesk'] text-xl md:text-2xl font-bold uppercase tracking-tighter border-4 border-[#FFFFFF] hover:bg-surface hover:text-[#FFFFFF] transition-none mt-auto flex items-center justify-center gap-4 group cursor-pointer">
              TRANSMIT MESSAGE
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-2 transition-transform duration-100"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
