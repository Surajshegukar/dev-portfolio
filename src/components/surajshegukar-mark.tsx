import React from "react";

export function SurajShegukarMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 120 60"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="40"
        fontWeight="800"
        fill="currentColor"
        fontFamily="var(--font-sans), sans-serif"
        letterSpacing="-0.02em"
      >
        SS
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 60"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="40" font-weight="800" fill="${color}" font-family="sans-serif" letter-spacing="-0.02em">SS</text></svg>`;
}
