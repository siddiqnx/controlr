import * as React from "react";

function SvgGeneric(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M59.417 32c0 15.142-12.275 27.417-27.417 27.417C16.858 59.417 4.583 47.142 4.583 32 4.583 16.858 16.858 4.583 32 4.583c15.142 0 27.417 12.275 27.417 27.417z"
        stroke="currentColor"
        strokeWidth={1.167}
      />
      <circle
        cx={31.792}
        cy={31.792}
        r={21.106}
        stroke="currentColor"
        strokeWidth={1.75}
      />
    </svg>
  );
}

export default SvgGeneric;