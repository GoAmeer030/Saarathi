import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import useLanguageStore from "@/store/useLanguageStore";
import getPageTextContent from "@/assets/content/getPageTextContent";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

import BusLogo from "@/components/logo/Bus";
import ChevronDownIcon from "@/components/logo/ChevronDown";

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { languageType } from "@/types/general-types";
import { getLanguageExpansion, languageList } from "@/utils/langugesUtils";

export default function LandingLayout() {
  const { lang } = useLocalSearchParams();
  const { language, setLanguage } = useLanguageStore();
  const colorScheme = useColorScheme();

  const textContent = getPageTextContent("landing", language);

  const logoColor = colorScheme === "dark" ? "white" : "black";

  useEffect(() => {
    if (lang && lang !== language) {
      setLanguage(lang as languageType);
    }
  }, [lang, language, setLanguage]);

  return (
    <SafeAreaView className="h-full bg-primary-0">
      <View className="flex h-full w-full flex-col font-nototamil">
        <View className="m-5 flex flex-row items-center gap-2">
          <View className="h-8 w-8">
            <BusLogo color={logoColor} />
          </View>
          <Text className="text-3xl font-bold text-typography-950">
            {textContent.title}
          </Text>
        </View>

        <View className="flex items-center justify-center">
          <View className="w-[40%]">
            <Select
              defaultValue="English"
              onValueChange={(e) => setLanguage(e as languageType)}
            >
              <SelectTrigger
                variant="underlined"
                size="lg"
                className="m-2 justify-between border-b-0 px-5"
              >
                <SelectInput
                  placeholder="Select option"
                  className="h-20 font-nototamil"
                />
                <View className="h-5 w-5">
                  <ChevronDownIcon color={logoColor} />
                </View>
              </SelectTrigger>

              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {languageList.map((lang) => (
                    <SelectItem
                      key={lang}
                      label={getLanguageExpansion(lang)}
                      value={lang}
                    />
                  ))}
                </SelectContent>
              </SelectPortal>
            </Select>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
