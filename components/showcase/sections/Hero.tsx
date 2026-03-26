export function Hero() {
  return (
    <section className="relative min-h-[819px] flex items-center px-8 max-w-7xl mx-auto">
      <div className="w-full lg:w-2/3">
        <span className="inline-block px-3 py-1 bg-[#0c5345] text-[#86c5b3] font-[Inter] text-[0.75rem] tracking-widest uppercase rounded-full mb-6">
          Shopify App Developer
        </span>
        <h1 className="font-[Manrope] text-[3.5rem] md:text-[5rem] font-extrabold tracking-[-0.02em] leading-none text-white mb-8">
          Sanchit <span className="text-[#a9d55a] italic">Jain</span>
        </h1>
        <p className="font-[Inter] text-xl md:text-2xl text-[#bdc9c2] max-w-xl mb-10 leading-relaxed">
          Crafting high-performance Shopify solutions. 2 live apps on the
          Shopify App Store, serving 50+ merchants globally.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-gradient-to-r from-[#a9d55a] to-[#577b00] text-[#243600] px-8 py-4 rounded-xl font-[Manrope] font-bold hover:shadow-[0_0_30px_rgba(169,213,90,0.3)] transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-[#333537] text-white px-8 py-4 rounded-xl font-[Manrope] font-bold border border-[#3e4944]/20 hover:bg-[#37393b] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square bg-gradient-to-tr from-[#a9d55a]/10 to-transparent rounded-full blur-[120px]" />
    </section>
  );
}
