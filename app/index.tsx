import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLanguageStore from "@/store/useLanguageStore";
import { useColorScheme } from "react-native";

import LottieView from "lottie-react-native";
import BusLogo from "@/components/logo/bus";
import ChevronDownIcon from "@/components/logo/chevron-down";

import { languageType } from "@/types/general-types";
import { getLanguageExpansion, languageList } from "@/utils/langugesUtils";

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
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import GoogleSignInButton from "@/components/auth/google-auth";
import { colors } from "@/components/ui/gluestack-ui-provider/config";
import { useLanguage } from "@/hooks/languageHook";

const LandingLayout = () => {
  const colorScheme = useColorScheme();
  const logoColor = colorScheme === "dark" ? "white" : "black";

  const { setLanguage } = useLanguageStore();
  const textContent = useLanguage("landing");

  return (
    <SafeAreaView className="h-full bg-background-0 font-nototamil">
      <View className="flex h-full w-full flex-col justify-between p-5">
        <View className="m-3 flex flex-row items-center gap-2">
          <View className="h-10 w-10">
            <BusLogo color={colors.primary} />
          </View>
          <Heading size="2xl" bold className="py-1 text-center">
            {textContent.title}
          </Heading>
        </View>

        <View className="mb-32 flex items-center justify-center">
          <View className="p-5">
            <LottieView
              autoPlay
              loop
              style={{ width: 300, height: 150 }}
              source={require("@/assets/lottie/PaperPlane.json")}
              resizeMode="cover"
            />
          </View>
          <Text size="lg" className="w-full text-center">
            {textContent.selectLanguage}
          </Text>
          <View className="w-[40%]">
            <Select
              defaultValue="English"
              onValueChange={(e) => setLanguage(e as languageType)}
            >
              <SelectTrigger
                variant="underlined"
                size="lg"
                className="m-2 justify-between border-primary-600 px-5"
              >
                <SelectInput
                  placeholder="Select option"
                  className="h-20 font-nototamil text-lg font-semibold"
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

        <View className="flex items-center justify-center">
          <Text
            size="2xs"
            className="p-0.5 text-center text-typography-700"
            sub
          >
            {textContent.disclaimer}
          </Text>
          <GoogleSignInButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingLayout;
