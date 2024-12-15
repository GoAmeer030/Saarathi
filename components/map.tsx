import React from "react";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { View, ActivityIndicator } from "react-native";
import { Text } from "@/components/ui/text";
import { useLocation } from "@/hooks/locationHook";

export const MapComponent: React.FC = () => {
  const mapRef = React.useRef<MapView>(null);
  const { currentLocation, initialRegion, error, isLoading } = useLocation();

  const centerToLocation = React.useCallback(() => {
    if (currentLocation && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000,
      );
    }
  }, [currentLocation]);

  React.useEffect(() => {
    centerToLocation();
    if (!currentLocation && !isLoading) {
      const retry = setTimeout(() => {
        centerToLocation();
      }, 2000);
      return () => clearTimeout(retry);
    }
  }, [centerToLocation, currentLocation, isLoading]);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{error}</Text>
      </View>
    );
  }

  const mapStyle = [
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  if (!initialRegion) return null;

  return (
    <MapView
      ref={mapRef}
      loadingEnabled
      provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      customMapStyle={mapStyle}
      className="h-[55%] w-full"
      onUserLocationChange={centerToLocation}
      zoomEnabled={true}
      rotateEnabled={true}
    >
      {currentLocation && (
        <Marker
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          title="Your Location"
        >
          <MaterialIcons name="location-on" size={40} color="#7c3aed" />
        </Marker>
      )}
    </MapView>
  );
};
