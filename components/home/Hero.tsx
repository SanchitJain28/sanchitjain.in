export default function Hero() {
  return (
    <section className="p-6 md:p-12 border-b-2 border-white min-h-[614px] flex flex-col justify-center">
      <div className="max-w-4xl">
        <div className="font-label text-xs mb-4 opacity-70">
          SYSTEM_INITIALIZED_2024.exe
        </div>
        <h1 className="font-headline text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
          FULLSTACK
          <br />
          DEVELOPER<span className="blinking-cursor text-white">█</span>
        </h1>
        <p className="font-body text-xl max-w-xl mb-8 leading-tight">
          ENGINEERING HIGH-DENSITY DIGITAL INTERFACES WITH UNCOMPROMISING
          CLARITY. CURRENTLY:[AVAILABLE_FOR_HIRE]
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-black px-6 py-3 font-bold uppercase hover:bg-black hover:text-white border-2 border-white transition-none">
            [ GET IN TOUCH ] →
          </button>
          <div className="border-2 border-white px-6 py-3 font-bold uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-white animate-pulse"></span>
            LOCATED: UTC+1
          </div>
        </div>
      </div>
    </section>
  );
}
