export const GOOGLE_MAPS_API_KEY =
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || "";
// if (!GOOGLE_MAPS_API_KEY) {
//   throw new Error("GOOGLE_MAPS_API_KEY is not defined");
// }

module.exports = {
  expo: {
    name: "saarathi",
    slug: "saarathi",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    icon: "./assets/images/SaarathiLogo.png",
    schema: "com.goameer030.saarathi",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.goameer030.saarathi",
    },
    android: {
      package: "com.goameer030.saarathi",
      adaptiveIcon: {
        backgroundColor: "#ffffff",
        foregroundImage: "./assets/images/SaarathiLogo.png",
      },
      config: {
        googleMaps: {
          apiKey: GOOGLE_MAPS_API_KEY,
        },
      },
      // buildType: "apk",
    },
    web: {
      bundler: "metro",
      output: "static",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/SaarathiLogo.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      ["@react-native-google-signin/google-signin"],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow $(PRODUCT_NAME) to use your location.",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "a35cf5a3-1552-4142-92a5-c88c7bb3c237",
      },
    },
    owner: "goameer030",
  },
};
