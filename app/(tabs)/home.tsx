import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Text as CustomText } from "@/components/ui/text";
import { MapComponent } from "@/components/map";

export default function Home() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  React.useEffect(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.present();
    }
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheetModalProvider>
        <MapComponent />
        <SafeAreaView className="flex-1">
          <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={["55%", "85%"]}
            enablePanDownToClose={false}
          >
            <BottomSheetView className="flex-1 p-4">
              <CustomText>Bottom Sheet</CustomText>
            </BottomSheetView>
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
