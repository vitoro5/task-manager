import React from "react";

function SvgCircle(props) {
  return (
    <svg viewBox="0 0 512 512" width={512} height={512} {...props}>
      <path
        d="M256 0C114.618 0 0 114.618 0 256s114.618 256 256 256 256-114.618 256-256S397.382 0 256 0zm0 469.333c-117.818 0-213.333-95.515-213.333-213.333S138.182 42.667 256 42.667 469.333 138.182 469.333 256 373.818 469.333 256 469.333z"
        data-original="#000000"
        className="circle_svg__active-path"
        data-old_color="#000000"
        fill="#DBDBDB"
      />
    </svg>
  );
}

export default SvgCircle;
