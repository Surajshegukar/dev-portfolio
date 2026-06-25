import React from "react";

export function SurajShegukarWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 100"
      fill="none"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="36"
        fontWeight="900"
        fill="currentColor"
        fontFamily="var(--font-sans), sans-serif"
        letterSpacing="0.05em"
      >
        SURAJ SHEGUKAR
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 400 100"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="36" font-weight="900" fill="${color}" font-family="sans-serif" letter-spacing="0.05em">SURAJ SHEGUKAR</text></svg>`;
}
