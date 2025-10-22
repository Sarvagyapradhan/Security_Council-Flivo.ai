import React from "react";

interface StylishFrameProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const StylishFrame: React.FC<StylishFrameProps> = ({ width = "100%", height = "100%", className }) => {
  return (
    <svg
      viewBox="0 0 1000 300"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-labelledby="stylish-frame-title"
    >
      <title id="stylish-frame-title">Stylish framed layout</title>
      <rect x="0" y="0" width="1000" height="300" fill="#002163" />
      <line x1="0" y1="95" x2="1000" y2="95" stroke="white" strokeWidth="2" />
      <line x1="0" y1="195" x2="1000" y2="195" stroke="white" strokeWidth="2" />
      <line x1="160" y1="0" x2="160" y2="300" stroke="white" strokeWidth="2" />
      <line x1="170" y1="0" x2="170" y2="300" stroke="white" strokeWidth="2" />
      <line x1="720" y1="0" x2="720" y2="300" stroke="white" strokeWidth="2" />
      <line x1="730" y1="0" x2="730" y2="300" stroke="white" strokeWidth="2" />
      <line x1="720" y1="95" x2="1000" y2="95" stroke="white" strokeWidth="2" />
      <line x1="720" y1="140" x2="1000" y2="140" stroke="white" strokeWidth="2" />
      <line x1="720" y1="185" x2="1000" y2="185" stroke="white" strokeWidth="2" />
      <line x1="720" y1="230" x2="1000" y2="230" stroke="white" strokeWidth="2" />
      <line x1="720" y1="275" x2="1000" y2="275" stroke="white" strokeWidth="2" />
      <line x1="990" y1="0" x2="990" y2="300" stroke="white" strokeWidth="2" />
      <circle cx="45" cy="45" r="15" fill="white" />
      <circle cx="45" cy="255" r="15" fill="white" />
      <line x1="45" y1="60" x2="45" y2="240" stroke="white" strokeWidth="2" />
      <line x1="45" y1="60" x2="55" y2="60" stroke="white" strokeWidth="2" />
      <line x1="45" y1="240" x2="55" y2="240" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default StylishFrame;
