"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "100ms", // Changed to faster, mechanical duration
    "--opacity": "0",
    "--radius": "0px", // Strict 0px radius enforcement
    "--easing": "linear", // Changed from ease to linear
    "--transition": "var(--duration) var(--easing)",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  // Brutalist Grayscale/Scanner Glare Effect (No Rainbows)
  const backgroundStyle = {
    "--step": "5%",
    "--pattern": "none",
    "--rainbow":
      "repeating-linear-gradient( 0deg, rgba(255,255,255,0) calc(var(--step) * 1), rgba(255,255,255,0.8) calc(var(--step) * 4), rgba(255,255,255,0) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal":
      "repeating-linear-gradient( 128deg, #000000 0%, #ffffff 3.8%, #ffffff 4.5%, #ffffff 5.2%, #000000 10%, #000000 12% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade":
      "radial-gradient( farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.8) 12%, rgba(255,255,255,0.15) 20%, rgba(0,0,0,0.8) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "overlay, overlay, normal",
  };

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current?.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current?.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current?.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current?.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  return (
    <div
      style={containerStyle}
      className="relative isolate [aspect-ratio:17/21] w-[320px] transition-transform delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)] will-change-transform [contain:layout_style] [perspective:600px]"
      ref={refElement}
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { background, rotate, glare } = state.current;
        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;
        glare.x = percentage.x;
        glare.y = percentage.y;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty("--duration", "0s");
            }
          }, 100);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration");
          refElement.current?.style.setProperty("--r-x", `0deg`);
          refElement.current?.style.setProperty("--r-y", `0deg`);
        }
      }}
    >
      <div className="grid h-full origin-center[transform:rotateY(var(--r-x))_rotateX(var(--r-y))] overflow-hidden rounded-none border-2 border-[#000000] bg-[#000000] transition-transform delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)] will-change-transform hover:filter-none hover:[--duration:0ms] hover:[--easing:linear] hover:[--opacity:0.8]">
        <div className="grid h-full w-full [clip-path:inset(0_0_0_0)][grid-area:1/1]">
          <div className={cn("h-full w-full bg-[#000000]", className)}>
            {children}
          </div>
        </div>

        {/* The White/Grayscale Mechanical Glare Overlay */}
        <div className="transition-background will-change-background grid h-full w-full opacity-[var(--opacity)] mix-blend-soft-light transition-opacity delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)][background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.9)_10%,_rgba(255,255,255,0.4)_20%,_rgba(0,0,0,0)_90%)][clip-path:inset(0_0_0_0)] [grid-area:1/1]" />
        <div
          className="will-change-background after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] relative grid h-full w-full opacity-[var(--opacity)] mix-blend-color-dodge transition-opacity[background:var(--rainbow),_var(--diagonal),_var(--shade)][clip-path:inset(0_0_0_0)] [grid-area:1/1] after:bg-[inherit] after:[background-size:200%_400%,_800%,_200%] after:[background-position:0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:mix-blend-exclusion after:content-['']"
          style={{ ...backgroundStyle }}
        />
      </div>
    </div>
  );
};
