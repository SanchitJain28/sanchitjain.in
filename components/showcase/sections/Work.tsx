import { Icon } from "@/components/ui/Icon";
import { App, APPS } from "@/lib/showcase/data";


function AppCard({ app }: { app: App }) {
  return (
    <div className="bg-[#0c0e10] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
      <div className="aspect-video relative overflow-hidden bg-[#1e2022]">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10] via-transparent to-transparent" />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#0c5345] flex items-center justify-center">
            <Icon name={app.icon} className="text-[#a9d55a]" />
          </div>
          <h3 className="font-[Manrope] text-2xl font-bold text-white">
            {app.title}
          </h3>
        </div>
        <p className="text-[#bdc9c2] mb-6 leading-relaxed">{app.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#282a2c] text-xs font-medium rounded-lg text-[#94d3c1]"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={app.link || "#"}
          className="inline-flex items-center gap-2 text-[#a9d55a] font-bold hover:underline group/link"
        >
          View on App Store
          <Icon
            name="arrow_forward"
            className="text-sm group-hover/link:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section className="py-24 px-8 bg-[#1a1c1e]" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-[Manrope] text-[1.75rem] font-bold text-white mb-2">
            Apps I&apos;ve Built
          </h2>
          <div className="w-20 h-1 bg-[#a9d55a] rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {APPS.map((app) => (
            <AppCard key={app.title} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
