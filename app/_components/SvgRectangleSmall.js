import * as React from "react";
const SvgRectangleSmall = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={299}
    height={107}
    fill="none"
    {...props}
  >
    <foreignObject width={433.001} height={241.001} x={-67} y={-67}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(33.5px)",
          clipPath: "url(#a)",
          height: "100%",
          width: "100%",
        }}
      />
    </foreignObject>
    <path
      fill="#6C6C6C"
      fillOpacity={0.06}
      d="M0 16C0 7.163 7.163 0 16 0h267c8.837 0 16 7.163 16 16v32.776a16 16 0 0 1-2.566 8.69l-27.319 42.225A16 16 0 0 1 255.682 107H16c-8.837 0-16-7.163-16-16V16Z"
      data-figma-bg-blur-radius={67}
    />
    <defs>
      <clipPath id="a" transform="translate(67 67)">
        <path d="M0 16C0 7.163 7.163 0 16 0h267c8.837 0 16 7.163 16 16v32.776a16 16 0 0 1-2.566 8.69l-27.319 42.225A16 16 0 0 1 255.682 107H16c-8.837 0-16-7.163-16-16V16Z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRectangleSmall;
