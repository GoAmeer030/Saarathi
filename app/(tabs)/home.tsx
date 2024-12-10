import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";

export default function App() {
  const [currentLocation, setCurrentLocation] =
    useState<null | Location.LocationObjectCoords>(null);
  const [initialRegion, setInitialRegion] = useState<null | any>(null);
  const mapRef = useRef<MapView>(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);

    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };

    if (mapRef.current) {
      mapRef.current.animateToRegion(region, 1000);
    }

    setInitialRegion(region);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      {initialRegion && (
        <MapView
          ref={mapRef}
          loadingEnabled
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          className="h-screen w-full"
        >
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Your Location"
            />
          )}
        </MapView>
      )}
    </SafeAreaView>
  );
}
