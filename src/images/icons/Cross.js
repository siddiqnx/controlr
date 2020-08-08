import * as React from "react";

function SvgCross(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" {...props}>
      <g clipPath="url(#Cross_svg__clip0)">
        <path
          d="M51.799 46.85L36.949 32 51.8 17.15a3.5 3.5 0 00-4.95-4.949L32 27.051 17.15 12.2a3.5 3.5 0 00-4.949 4.95L27.051 32 12.2 46.85a3.5 3.5 0 004.95 4.949L32 36.949 46.85 51.8a3.5 3.5 0 004.949-4.95z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="Cross_svg__clip0">
          <path fill="#fff" d="M0 0h64v64H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCross;
