import { Service, SERVICES } from "@/lib/showcase/data";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="p-8 bg-[#1e2022] border border-[#3e4944]/10 rounded-2xl hover:border-[#a9d55a]/30 transition-colors">
      <div className="text-[#a9d55a] font-[Manrope] font-bold text-3xl mb-6">
        {service.number}
      </div>
      <h3 className="font-[Manrope] text-xl font-bold text-white mb-4 leading-tight">
        {service.title}
      </h3>
      <p className="text-sm text-[#bdc9c2] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section className="py-24 px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-[Manrope] text-[1.75rem] font-bold text-white mb-4">
              What I Can Build For You
            </h2>
            <p className="text-[#bdc9c2] leading-relaxed">
              Specialized technical solutions for the modern Shopify ecosystem,
              from custom backends to headless storefronts.
            </p>
          </div>
          <div className="hidden md:block text-[#a9d55a] font-bold tracking-tighter text-4xl opacity-20">
            SERVICES
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
