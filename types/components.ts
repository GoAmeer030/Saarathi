import React from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";

export interface MapComponentProps {
  mapRef: React.RefObject<MapView>;
  initialRegion: any;
  currentLocation: Location.LocationObjectCoords | null;
  onCenterPress: () => void;
}
