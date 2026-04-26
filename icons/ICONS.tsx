import React, { useId } from "react";

export interface BrutalistIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "black" | "white";
  size?: number | string;
}

const useBrutalistTheme = (variant: "black" | "white" = "white") => {
  const isBlack = variant === "black";
  return {
    bg: isBlack ? "#000000" : "#FFFFFF",
    fg: isBlack ? "#FFFFFF" : "#000000",
  };
};

// Reusable extremely dense geometric patterns for the brutalist aesthetic
const BrutalistPatterns = ({ fg, uid }: { fg: string; uid: string }) => (
  <defs>
    <pattern
      id={`hatch-${uid}`}
      width="6"
      height="6"
      patternTransform="rotate(45 0 0)"
      patternUnits="userSpaceOnUse"
    >
      <line x1="0" y1="0" x2="0" y2="6" stroke={fg} strokeWidth="2.5" />
    </pattern>
    <pattern
      id={`hatch-rev-${uid}`}
      width="6"
      height="6"
      patternTransform="rotate(-45 0 0)"
      patternUnits="userSpaceOnUse"
    >
      <line x1="0" y1="0" x2="0" y2="6" stroke={fg} strokeWidth="2.5" />
    </pattern>
    <pattern
      id={`grid-${uid}`}
      width="8"
      height="8"
      patternUnits="userSpaceOnUse"
    >
      <rect width="8" height="8" fill="none" stroke={fg} strokeWidth="1" />
    </pattern>
    <pattern
      id={`dots-${uid}`}
      width="4"
      height="4"
      patternUnits="userSpaceOnUse"
    >
      <rect width="2" height="2" fill={fg} />
    </pattern>
    <pattern
      id={`stripes-${uid}`}
      width="8"
      height="8"
      patternUnits="userSpaceOnUse"
    >
      <line x1="0" y1="4" x2="8" y2="4" stroke={fg} strokeWidth="4" />
    </pattern>
    <pattern
      id={`stripes-vert-${uid}`}
      width="8"
      height="8"
      patternUnits="userSpaceOnUse"
    >
      <line x1="4" y1="0" x2="4" y2="8" stroke={fg} strokeWidth="4" />
    </pattern>
  </defs>
);

export const Javascript = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} />
      <rect width="64" height="64" fill={`url(#grid-${uid})`} />
      <rect x="12" y="12" width="48" height="48" fill={fg} />
      {/* Brutalist 'J' */}
      <path d="M 32 20 h 8 v 24 h -16 v -8 h 4 v 4 h 4 z" fill={bg} />
      {/* Brutalist 'S' */}
      <path
        d="M 44 20 h 12 v 6 h -8 v 4 h 8 v 14 h -12 v -6 h 8 v -6 h -8 z"
        fill={bg}
      />
      <rect width="64" height="64" fill="none" stroke={fg} strokeWidth="4" />
    </svg>
  );
};

export const Typescript = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} />
      <rect width="64" height="64" fill={`url(#stripes-vert-${uid})`} />
      <rect x="12" y="12" width="48" height="48" fill={fg} />
      {/* Brutalist 'T' */}
      <path d="M 22 20 h 16 v 6 h -5 v 18 h -6 v -18 h -5 z" fill={bg} />
      {/* Brutalist 'S' */}
      <path
        d="M 42 20 h 12 v 6 h -8 v 4 h 8 v 14 h -12 v -6 h 8 v -6 h -8 z"
        fill={bg}
      />
      <rect width="64" height="64" fill="none" stroke={fg} strokeWidth="4" />
    </svg>
  );
};

export const ReactIcon = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <g stroke={fg} strokeWidth="4" fill="none">
        <polygon points="12,32 32,8 52,32 32,56" />
        <polygon points="12,32 32,8 52,32 32,56" transform="rotate(60 32 32)" />
        <polygon
          points="12,32 32,8 52,32 32,56"
          transform="rotate(120 32 32)"
        />
      </g>
      <rect x="24" y="24" width="16" height="16" fill={fg} />
      <rect x="28" y="28" width="8" height="8" fill={bg} />
    </svg>
  );
};

export const NextJs = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect width="64" height="64" fill={`url(#stripes-${uid})`} />
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        fill={bg}
        stroke={fg}
        strokeWidth="4"
      />
      <path d="M 16 16 h 10 v 32 h -10 z" fill={fg} />
      <path d="M 38 16 h 10 v 32 h -10 z" fill={fg} />
      <path d="M 16 16 L 48 48 L 38 48 L 16 26 Z" fill={fg} />
    </svg>
  );
};

export const NodeJs = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <path
        d="M 32 32 L 32 12 M 32 32 L 52 32 M 32 32 L 12 52 M 52 32 L 52 52 M 12 52 L 12 32 M 32 12 L 12 12"
        stroke={fg}
        strokeWidth="4"
        fill="none"
      />
      <rect x="26" y="26" width="12" height="12" fill={fg} />
      <rect
        x="26"
        y="6"
        width="12"
        height="12"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect
        x="46"
        y="26"
        width="12"
        height="12"
        fill={`url(#dots-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect x="46" y="46" width="12" height="12" fill={fg} />
      <rect
        x="6"
        y="46"
        width="12"
        height="12"
        fill={`url(#hatch-rev-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect
        x="6"
        y="26"
        width="12"
        height="12"
        fill={`url(#grid-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect x="6" y="6" width="12" height="12" fill={fg} />
    </svg>
  );
};

export const PostgreSql = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect x="32" y="0" width="32" height="64" fill={`url(#hatch-${uid})`} />
      {/* Abstract Brutalist Elephant */}
      <rect
        x="12"
        y="16"
        width="20"
        height="32"
        fill={fg}
        stroke={bg}
        strokeWidth="2"
      />
      <rect
        x="32"
        y="16"
        width="24"
        height="20"
        fill={bg}
        stroke={fg}
        strokeWidth="4"
      />
      <rect
        x="44"
        y="36"
        width="12"
        height="24"
        fill={bg}
        stroke={fg}
        strokeWidth="4"
      />
      <polygon points="32,36 44,36 44,52" fill={fg} />
      <rect x="46" y="24" width="6" height="6" fill={fg} />
    </svg>
  );
};

export const Tailwind = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Top offset sawtooth wave */}
      <polygon
        points="4,28 20,12 36,28 52,12 64,24 64,36 52,24 36,40 20,24 4,40"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      {/* Bottom offset sawtooth wave */}
      <polygon
        points="0,40 16,24 32,40 48,24 60,36 60,48 48,36 32,52 16,36 0,52"
        fill={fg}
      />
    </svg>
  );
};

export const Firebase = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <polygon
        points="12,60 32,16 48,60"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <polygon
        points="24,60 44,8 60,60"
        fill={`url(#dots-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <polygon points="4,60 24,24 40,60" fill={fg} />
      <polygon points="16,60 24,44 32,60" fill={bg} />
    </svg>
  );
};

export const GraphQl = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <polygon
        points="32,8 56,20 56,44 32,56 8,44 8,20"
        fill={`url(#grid-${uid})`}
        stroke={fg}
        strokeWidth="4"
      />
      <path
        d="M 32 8 L 32 56 M 8 20 L 56 44 M 8 44 L 56 20"
        stroke={fg}
        strokeWidth="4"
      />
      {/* Node Blocks */}
      <rect x="28" y="4" width="8" height="8" fill={fg} />
      <rect
        x="52"
        y="16"
        width="8"
        height="8"
        fill={bg}
        stroke={fg}
        strokeWidth="2"
      />
      <rect
        x="52"
        y="40"
        width="8"
        height="8"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect x="28" y="52" width="8" height="8" fill={fg} />
      <rect
        x="4"
        y="40"
        width="8"
        height="8"
        fill={bg}
        stroke={fg}
        strokeWidth="2"
      />
      <rect
        x="4"
        y="16"
        width="8"
        height="8"
        fill={`url(#hatch-rev-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect x="26" y="26" width="12" height="12" fill={fg} />
      <rect x="30" y="30" width="4" height="4" fill={bg} />
    </svg>
  );
};

export const Shopify = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect
        x="24"
        y="12"
        width="16"
        height="12"
        fill="none"
        stroke={fg}
        strokeWidth="4"
      />
      <rect x="12" y="24" width="40" height="32" fill={fg} />
      <rect
        x="18"
        y="30"
        width="28"
        height="20"
        fill={`url(#hatch-${uid})`}
        stroke={bg}
        strokeWidth="2"
      />
      <rect x="26" y="34" width="12" height="12" fill={bg} />
      {/* Abstract S inside bag */}
      <path d="M 28 36 h 8 v 2 h -6 v 4 h 6 v 4 h -8 z" fill={fg} />
    </svg>
  );
};

export const Liquid = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect x="8" y="0" width="12" height="32" fill={fg} />
      <polygon points="8,32 20,32 14,44" fill={fg} />
      <rect
        x="24"
        y="0"
        width="12"
        height="48"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <polygon points="24,48 36,48 30,60" fill={fg} />
      <rect
        x="40"
        y="0"
        width="12"
        height="24"
        fill={`url(#dots-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <polygon points="40,24 52,24 46,36" fill={fg} />
      <rect x="56" y="0" width="8" height="56" fill={fg} />
      <polygon points="56,56 64,56 60,64" fill={fg} />
    </svg>
  );
};

export const HtmlCss = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect width="64" height="64" fill={`url(#grid-${uid})`} />
      {/* Brutalist Angle Brackets */}
      <polygon points="28,16 8,32 28,48 22,52 0,32 22,12" fill={fg} />
      <polygon points="36,16 56,32 36,48 42,52 64,32 42,12" fill={fg} />
      <polygon points="38,8 46,8 26,56 18,56" fill={fg} />
    </svg>
  );
};

export const Figma = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Figma's circles turned into densely patterned brutalist blocks */}
      <rect
        x="16"
        y="8"
        width="16"
        height="16"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect
        x="32"
        y="8"
        width="16"
        height="16"
        fill={`url(#stripes-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect x="16" y="24" width="16" height="16" fill={fg} />
      <rect
        x="32"
        y="24"
        width="16"
        height="16"
        fill={`url(#grid-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect
        x="16"
        y="40"
        width="16"
        height="16"
        fill={`url(#stripes-vert-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      {/* Center anchor point */}
      <rect
        x="28"
        y="28"
        width="8"
        height="8"
        fill={bg}
        stroke={fg}
        strokeWidth="2"
      />
    </svg>
  );
};

export const Supabase = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect width="64" height="64" fill={`url(#dots-${uid})`} />
      {/* Brutalist Base Block */}
      <rect
        x="16"
        y="16"
        width="32"
        height="32"
        fill={bg}
        stroke={fg}
        strokeWidth="4"
      />
      {/* Intersecting rigid slice offset */}
      <polygon points="12,32 52,12 52,32 12,52" fill={fg} />
      <polygon points="20,28 44,16 44,28 20,40" fill={bg} />
    </svg>
  );
};

export const Prisma = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Massive broken triangle */}
      <polygon
        points="32,8 60,56 4,56"
        fill="none"
        stroke={fg}
        strokeWidth="4"
      />
      <polygon points="32,8 32,56 4,56" fill={`url(#stripes-${uid})`} />
      <polygon points="32,8 60,56 32,56" fill={fg} />
      {/* Stark overlapping parallelogram representing the swoosh */}
      <polygon
        points="20,28 44,28 32,48 8,48"
        fill={bg}
        stroke={fg}
        strokeWidth="2"
      />
      <polygon points="24,32 40,32 32,44 16,44" fill={`url(#hatch-${uid})`} />
    </svg>
  );
};

export const MongoDb = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Leaf turned into sharp diamond split vertically */}
      <polygon
        points="32,4 52,32 32,60 12,32"
        fill="none"
        stroke={fg}
        strokeWidth="4"
      />
      <polygon points="32,4 32,60 12,32" fill={fg} />
      <polygon points="32,4 52,32 32,60" fill={`url(#stripes-${uid})`} />
      {/* Hollow cutout on solid side */}
      <polygon points="28,16 28,48 16,32" fill={bg} />
    </svg>
  );
};

export const Redis = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Three massive stacked geometric isometric cubes */}
      {/* Top Cube */}
      <g transform="translate(0, -12)">
        <polygon
          points="32,16 48,24 32,32 16,24"
          fill={fg}
          stroke={bg}
          strokeWidth="2"
        />
        <polygon
          points="16,24 32,32 32,48 16,40"
          fill={`url(#hatch-${uid})`}
          stroke={fg}
          strokeWidth="2"
        />
        <polygon
          points="32,32 48,24 48,40 32,48"
          fill={`url(#grid-${uid})`}
          stroke={fg}
          strokeWidth="2"
        />
      </g>
      {/* Bottom Left Cube */}
      <g transform="translate(-16, 12)">
        <polygon
          points="32,16 48,24 32,32 16,24"
          fill={`url(#stripes-${uid})`}
          stroke={fg}
          strokeWidth="2"
        />
        <polygon
          points="16,24 32,32 32,48 16,40"
          fill={fg}
          stroke={bg}
          strokeWidth="2"
        />
        <polygon
          points="32,32 48,24 48,40 32,48"
          fill={`url(#dots-${uid})`}
          stroke={fg}
          strokeWidth="2"
        />
      </g>
      {/* Bottom Right Cube */}
      <g transform="translate(16, 12)">
        <polygon
          points="32,16 48,24 32,32 16,24"
          fill={`url(#hatch-rev-${uid})`}
          stroke={fg}
          strokeWidth="2"
        />
        <polygon
          points="16,24 32,32 32,48 16,40"
          fill={`url(#grid-${uid})`}
          stroke={fg}
          strokeWidth="2"
        />
        <polygon
          points="32,32 48,24 48,40 32,48"
          fill={fg}
          stroke={bg}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export const Docker = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Ship Hull */}
      <polygon points="8,44 60,44 48,60 16,60" fill={fg} />
      <rect x="20" y="48" width="4" height="4" fill={bg} />
      <rect x="28" y="48" width="4" height="4" fill={bg} />
      <rect x="36" y="48" width="4" height="4" fill={bg} />
      <rect x="44" y="48" width="4" height="4" fill={bg} />
      {/* Cargo Containers - 3x2 Grid */}
      <rect
        x="20"
        y="32"
        width="12"
        height="12"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect x="32" y="32" width="12" height="12" fill={fg} />
      <rect
        x="44"
        y="32"
        width="12"
        height="12"
        fill={`url(#grid-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect x="20" y="20" width="12" height="12" fill={fg} />
      <rect
        x="32"
        y="20"
        width="12"
        height="12"
        fill={`url(#stripes-vert-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <rect
        x="44"
        y="20"
        width="12"
        height="12"
        fill={bg}
        stroke={fg}
        strokeWidth="2"
      />
      {/* Crane detail */}
      <polyline
        points="4,44 4,12 20,12"
        fill="none"
        stroke={fg}
        strokeWidth="4"
      />
      <line x1="20" y1="12" x2="20" y2="20" stroke={fg} strokeWidth="2" />
    </svg>
  );
};

export const ExpressJs = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect width="64" height="64" fill={`url(#dots-${uid})`} />
      <rect
        x="8"
        y="16"
        width="48"
        height="32"
        fill={bg}
        stroke={fg}
        strokeWidth="4"
      />
      {/* Stark EX typography */}
      {/* E */}
      <path
        d="M 14 22 h 12 v 4 h -8 v 4 h 6 v 4 h -6 v 4 h 8 v 4 h -12 z"
        fill={fg}
      />
      {/* X */}
      <path
        d="M 32 22 h 6 l 4 8 l 4 -8 h 6 l -7 10 l 7 10 h -6 l -4 -8 l -4 8 h -6 l 7 -10 z"
        fill={fg}
      />
    </svg>
  );
};

export const Websockets = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      <rect width="64" height="64" fill={`url(#stripes-${uid})`} />
      {/* Left Plug */}
      <polygon
        points="4,20 28,20 28,12 36,12 36,52 28,52 28,44 4,44"
        fill={fg}
      />
      {/* Right Plug with strict gap */}
      <polygon
        points="60,28 40,28 40,16 32,16 32,48 40,48 40,36 60,36"
        fill={bg}
        stroke={fg}
        strokeWidth="4"
      />
      {/* Inner details to amplify high definition look */}
      <rect x="8" y="24" width="16" height="4" fill={bg} />
      <rect x="8" y="36" width="16" height="4" fill={bg} />
      <rect x="44" y="20" width="12" height="4" fill={fg} />
      <rect x="44" y="40" width="12" height="4" fill={fg} />
    </svg>
  );
};

export const Ecommerce = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Massive abstract barcode */}
      <rect x="8" y="8" width="4" height="48" fill={fg} />
      <rect x="16" y="8" width="2" height="48" fill={fg} />
      <rect x="22" y="8" width="8" height="48" fill={fg} />
      <rect x="34" y="8" width="4" height="48" fill={fg} />
      <rect x="42" y="8" width="2" height="48" fill={fg} />
      <rect x="48" y="8" width="8" height="48" fill={fg} />
      {/* Stark Shopping Cart / Tag Block overriding barcode */}
      <rect
        x="28"
        y="28"
        width="32"
        height="32"
        fill={bg}
        stroke={fg}
        strokeWidth="4"
      />
      <rect x="28" y="28" width="32" height="32" fill={`url(#grid-${uid})`} />
      <rect x="34" y="34" width="20" height="20" fill={fg} />
      {/* Cart base */}
      <path
        d="M 36 38 h 4 l 2 8 h 10 l 2 -8 h -12"
        stroke={bg}
        strokeWidth="2"
        fill="none"
      />
      <rect x="42" y="48" width="2" height="2" fill={bg} />
      <rect x="50" y="48" width="2" height="2" fill={bg} />
    </svg>
  );
};

export const Cms = ({
  variant,
  size = 64,
  className,
  ...props
}: BrutalistIconProps) => {
  const { bg, fg } = useBrutalistTheme(variant);
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <BrutalistPatterns fg={fg} uid={uid} />
      {/* Brutalist website wireframe blueprint */}
      <rect width="64" height="64" fill={bg} stroke={fg} strokeWidth="4" />
      {/* Header */}
      <rect
        x="4"
        y="4"
        width="56"
        height="12"
        fill={`url(#stripes-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      {/* Sidebar */}
      <rect x="4" y="20" width="16" height="40" fill={fg} />
      <rect x="6" y="24" width="12" height="4" fill={bg} />
      <rect x="6" y="32" width="12" height="4" fill={bg} />
      <rect x="6" y="40" width="12" height="4" fill={bg} />
      {/* Main Content Area */}
      <rect
        x="24"
        y="20"
        width="36"
        height="40"
        fill="none"
        stroke={fg}
        strokeWidth="2"
      />
      {/* Image Placeholder */}
      <rect
        x="28"
        y="24"
        width="28"
        height="20"
        fill={`url(#hatch-${uid})`}
        stroke={fg}
        strokeWidth="2"
      />
      <line x1="28" y1="24" x2="56" y2="44" stroke={bg} strokeWidth="2" />
      <line x1="28" y1="44" x2="56" y2="24" stroke={bg} strokeWidth="2" />
      {/* Text Lines */}
      <rect x="28" y="48" width="28" height="4" fill={fg} />
      <rect x="28" y="54" width="16" height="4" fill={fg} />
    </svg>
  );
};

export const Icons = {
  Javascript,
  Typescript,
  React: ReactIcon,
  NextJs,
  NodeJs,
  PostgreSql,
  Tailwind,
  Firebase,
  GraphQl,
  Shopify,
  Liquid,
  HtmlCss,
  Figma,
  Supabase,
  Prisma,
  MongoDb,
  Redis,
  Docker,
  ExpressJs,
  Websockets,
  Ecommerce,
  Cms,
};
