import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";

const GoogleLogo = () => {
  return (
    <Svg viewBox="0 0 48 48" fill="none">
      <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <Rect width="48" height="48" fill="white" fillOpacity="0.01"></Rect>
        <Path
          d="M34.5 7L29.5 14.5C28.5 13.9684 26.5 12.9999 24 12.9999C18 12.9999 13 17.9999 13 23.4999C13 28.9999 17 35.0006 24 35.0006C29.6 35.0006 33.5 31.0005 33.5 28.0005H24V21.0002C31 21.0003 44 20.9999 44 20.9999C44.5 28.5002 42.2896 32.9004 39.5 36.5C35.3242 41.8881 29.1712 44.0002 24 44.0002C14 44.0002 4 36.0006 4 23.4999C4 11.5 14.7237 4 23 4C31.2763 4 34.5 7 34.5 7Z"
          fill="#ffffff"
        ></Path>
      </G>
    </Svg>
  );
};

export default GoogleLogo;
