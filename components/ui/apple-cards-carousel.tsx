"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 320;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        {/* Carousel Header & Controls */}
        <div className="flex justify-between items-end mb-6 pr-4">
          <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#000000]">
            [ REGISTRY: PROJECTS ]
          </span>
          <div className="flex gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center border border-[#000000] bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-none disabled:opacity-30 disabled:hover:bg-[#FFFFFF] disabled:hover:text-[#000000]"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              ←
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center border border-[#000000] bg-[#000000] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-none disabled:opacity-30 disabled:hover:bg-[#000000] disabled:hover:text-[#FFFFFF]"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pb-8 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-4">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.2,
                    delay: 0.1 * index,
                    ease: "linear",
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[10%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "linear" }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-4xl border-2 border-[#000000] bg-[#FFFFFF] flex flex-col font-sans"
            >
              {/* Modal Header */}
              <div className="border-b-2 border-[#000000] p-6 flex justify-between items-start bg-[#FFFFFF]">
                <div>
                  <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="font-mono text-xs font-bold uppercase tracking-widest text-[#000000] mb-2"
                  >
                    [ {card.category} ]
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold text-[#000000] uppercase tracking-tighter"
                  >
                    {card.title}
                  </motion.p>
                </div>
                <button
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#000000] bg-[#000000] font-mono text-white hover:bg-[#FFFFFF] hover:text-[#000000] transition-none"
                  onClick={handleClose}
                >
                  [X]
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 bg-[#FFFFFF]">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Structural Card Layout - Replaces Apple Gradients */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-64 md:h-[28rem] md:w-80 flex-col items-start justify-start border border-[#000000] bg-[#FFFFFF] group transition-none text-left overflow-hidden"
      >
        {/* Top: Image Section */}
        <div className="relative w-full h-[65%] border-b border-[#000000] overflow-hidden bg-[#000000]">
          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="absolute inset-0 z-10 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-linear grayscale group-hover:grayscale-0"
          />
        </div>

        {/* Bottom: Text Section (Inverts on hover) */}
        <div className="flex-1 w-full flex flex-col justify-between p-5 bg-[#FFFFFF] group-hover:bg-[#000000] transition-none">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-[#000000] group-hover:text-[#FFFFFF]"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="font-['Space_Grotesk'] text-xl font-bold uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] mt-2"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition-none",
        isLoading ? "opacity-0" : "opacity-100",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Project Preview"}
      {...rest}
    />
  );
};
