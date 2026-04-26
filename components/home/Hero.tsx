export default function Hero() {
  return (
    <section className="p-6 md:p-12 lg:p-24 border-b border-surface flex flex-col justify-center bg-[#FFFFFF]">
      <div className="max-w-4xl">
        <div className="font-['Space_Grotesk'] text-[0.75rem] font-bold mb-8 text-surface tracking-widest uppercase inline-block border border-surface px-3 py-1">
          [INFO] SYSTEM_INITIALIZED.exe
        </div>

        <h1 className="font-['Space_Grotesk'] text-[4rem] md:text-[6.5rem] lg:text-[8rem] font-bold uppercase tracking-tighter leading-[0.85] mb-8 text-surface wrap-break-word">
          FULLSTACK
          <br />
          DEVELOPER
        </h1>

        <p className="font-['Inter'] text-lg md:text-xl max-w-xl mb-12 leading-tight text-surface font-medium">
          ENGINEERING HIGH-DENSITY DIGITAL INTERFACES WITH UNCOMPROMISING
          CLARITY. CURRENTLY:{" "}
          <span className="bg-surface text-[#FFFFFF] px-1 whitespace-nowrap">
            [AVAILABLE_FOR_HIRE]
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="flex items-center justify-center bg-surface text-[#FFFFFF] px-8 py-5 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight border border-surface hover:bg-[#FFFFFF] hover:text-surface transition-none rounded-none">
            GET IN TOUCH →
          </button>

          <div className="flex items-center justify-center bg-[#FFFFFF] text-surface px-8 py-5 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight border border-surface rounded-none gap-3">
            <span className="w-3 h-3 bg-surface"></span>[LOCATED: IST /
            UTC+5:30]
          </div>
        </div>
      </div>
    </section>
  );
}
