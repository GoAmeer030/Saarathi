import { Text } from "@/components/ui/text";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const HelpCircle = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="none">
      <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <Text> </Text>
        <Path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#ff0000"
          strokeWidth="2"
        ></Path>
        <Text> </Text>
        <Path
          d="M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13"
          stroke="#ff0000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></Path>
        <Text> </Text>
        <Path
          d="M12 16H12.01"
          stroke="#ff0000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></Path>
        <Text> </Text>
      </G>
    </Svg>
  );
};

export default HelpCircle;
