import * as React from "react";

function SvgRooms(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" {...props}>
      <rect x={4} y={4} width={23} height={23} rx={5} fill="currentColor" />
      <rect x={4} y={37} width={23} height={23} rx={5} fill="currentColor" />
      <rect x={37} y={4} width={23} height={23} rx={5} fill="currentColor" />
      <rect x={37} y={37} width={23} height={23} rx={5} fill="currentColor" />
    </svg>
  );
}

export default SvgRooms;
