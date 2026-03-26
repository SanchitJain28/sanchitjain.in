import { Icon } from "@/components/ui/Icon";

export function Contact() {
  return (
    <section
      className="py-24 px-8 bg-[#282a2c] relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="font-[Manrope] text-[2.5rem] md:text-[3.5rem] font-extrabold text-white mb-8 tracking-tight">
          Let&apos;s Work Together
        </h2>
        <p className="font-[Inter] text-xl text-[#bdc9c2] mb-12 max-w-2xl mx-auto">
          Currently accepting new projects. Whether it&apos;s a new app idea or
          scaling an existing store, let&apos;s talk shop.
        </p>
        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:mythichuman28@gmail.com"
            className="group flex items-center gap-4 bg-[#0c0e10] px-8 py-6 rounded-2xl border border-[#3e4944]/20 hover:border-[#a9d55a] transition-all"
          >
            <div className="w-12 h-12 bg-[#a9d55a] rounded-full flex items-center justify-center text-[#243600]">
              <Icon name="mail" />
            </div>
            <div className="text-left">
              <div className="text-[0.6rem] uppercase tracking-widest text-[#bdc9c2] font-bold">
                Direct Email
              </div>
              <div className="text-lg font-[Manrope] font-bold text-white group-hover:text-[#a9d55a] transition-colors">
                mythichuman28@gmail.com
              </div>
            </div>
          </a>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-14 h-14 bg-[#0c0e10] rounded-full flex items-center justify-center border border-[#3e4944]/20 hover:border-[#a9d55a] hover:text-[#a9d55a] transition-all"
            >
              <Icon name="work" />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-[#0c0e10] rounded-full flex items-center justify-center border border-[#3e4944]/20 hover:border-[#a9d55a] hover:text-[#a9d55a] transition-all"
            >
              <Icon name="code" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#a9d55a]/5 to-transparent" />
    </section>
  );
}
