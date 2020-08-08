import * as React from "react";

function SvgTimer(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M35.108 10.443a21.784 21.784 0 01-3.111 43.337 21.778 21.778 0 01-14.74-37.809l-4.403-4.402a28 28 0 1016.032-7.395v18.76h6.222V10.443z"
        fill="currentColor"
      />
      <path
        d="M20.552 23.219a2.667 2.667 0 000 3.77l7.544 7.544a2.666 2.666 0 003.77-3.77l-7.546-7.544a2.666 2.666 0 00-3.77 0h.002z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTimer;
