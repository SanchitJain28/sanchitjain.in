import { Icon } from "@/components/ui/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { App, APPS } from "@/lib/showcase/data";

function AppCard({ app }: { app: App }) {
  // Fallback to single image if `images` array isn't provided in your data
  const images = app.images?.length ? app.images : app.image ? [app.image] : [];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="bg-[#0c0e10] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden bg-[#1e2022]">
        {/* INNER CAROUSEL: For Multiple Card Images */}
        {hasMultipleImages ? (
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full ml-0">
              {images.map((img, idx) => (
                <CarouselItem key={idx} className="h-full pl-0 relative">
                  <img
                    src={img}
                    alt={`${app.title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom overlay controls for inner carousel - ALWAYS VISIBLE NOW */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm border-none text-white hover:bg-[#a9d55a] hover:text-[#243600] z-20 transition-colors" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm border-none text-white hover:bg-[#a9d55a] hover:text-[#243600] z-20 transition-colors" />
          </Carousel>
        ) : (
          <img
            src={images[0]}
            alt={app.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
        )}

        {/* Gradient overlay - pointer-events-none ensures we can still click carousel arrows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10] via-transparent to-transparent pointer-events-none z-10" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#0c5345] flex items-center justify-center shrink-0">
            <Icon name={app.icon} className="text-[#a9d55a]" />
          </div>
          <h3 className="font-[Manrope] text-2xl font-bold text-white">
            {app.title}
          </h3>
        </div>

        <p className="text-[#bdc9c2] mb-6 leading-relaxed flex-grow">
          {app.description}
        </p>

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
          className="inline-flex items-center gap-2 text-[#a9d55a] font-bold hover:underline group/link mt-auto w-fit"
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
  const isCarousel = APPS.length > 2;

  return (
    <section className="py-24 px-8 bg-[#1a1c1e]" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-[Manrope] text-[1.75rem] font-bold text-white mb-2">
            Apps I&apos;ve Built
          </h2>
          <div className="w-20 h-1 bg-[#a9d55a] rounded-full" />
        </div>

        {/* OUTER CAROUSEL: For More Than 2 Cards */}
        {isCarousel ? (
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            {/* -ml-6 offsets the padding given to items to create the gap */}
            <CarouselContent className="-ml-6">
              {APPS.map((app, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2">
                  <AppCard app={app} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Main Navigation controls for outer carousel placed below the cards */}
            <div className="flex justify-end gap-4 mt-8">
              {/* `static translate-x-0 translate-y-0` overrides Shadcn's absolute positioning default */}
              <CarouselPrevious className="static translate-y-0 translate-x-0 bg-[#0c0e10] border-[#3e4944]/20 text-[#bdc9c2] hover:bg-[#a9d55a] hover:text-[#243600] w-12 h-12" />
              <CarouselNext className="static translate-y-0 translate-x-0 bg-[#0c0e10] border-[#3e4944]/20 text-[#bdc9c2] hover:bg-[#a9d55a] hover:text-[#243600] w-12 h-12" />
            </div>
          </Carousel>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            {APPS.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
