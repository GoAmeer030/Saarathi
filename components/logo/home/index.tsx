import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Text } from "@/components/ui/text";

const HomeLogo = ({ color = "#000000" }) => {
  return (
    <Svg viewBox="0 0 16 16" fill="none">
      <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <Text> </Text>
        <Path
          d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
          fill={color}
        ></Path>
        <Text> </Text>
      </G>
    </Svg>
  );
};

export default HomeLogo;
