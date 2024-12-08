import React from "react";
import Svg, { Path } from "react-native-svg";

const ChevronDownIcon = ({ color = "#000000" }) => {
  return (
    <Svg viewBox="0 0 24 24" fill={color} className="size-6">
      <Path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ChevronDownIcon;
