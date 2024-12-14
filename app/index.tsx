import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLanguageStore from "@/store/useLanguageStore";

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
import { useLanguage } from "@/hooks/languageHook";

const LandingLayout = () => {
  const { setLanguage } = useLanguageStore();
  const textContent = useLanguage("landing");

  return (
    <SafeAreaView className="h-full bg-background-0 font-nototamil">
      <View className="flex h-full w-full flex-col justify-between p-5">
        <View className="m-3 flex flex-row items-center gap-2">
          <View className="h-12 w-12 rounded-xl bg-primary-600">
            <View className="p-2">
              <BusLogo color="white" />
            </View>
          </View>
          <Heading size="2xl" bold className="py-1 text-center">
            {textContent.title}
          </Heading>
        </View>

        <View className="mb-32 flex items-center justify-center gap-3">
          <View className="p-5">
            <LottieView
              autoPlay
              loop
              style={{ width: 300, height: 150 }}
              source={require("@/assets/lottie/PaperPlane.json")}
              resizeMode="cover"
            />
          </View>
          <Text
            size="lg"
            className="w-[90%] text-wrap text-center text-3xl font-bold text-typography-900"
          >
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
                  <ChevronDownIcon color="black" />
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

        <View className="flex items-center justify-center gap-3">
          <GoogleSignInButton />
          <Text size="sm" className="text-md p-0.5 text-center" sub>
            <Text size="sm" className="text-md p-0.5 text-center" sub>
              {textContent.disclaimer
                .split(/"(.*?)"/g)
                .map((part: string, index: number) => {
                  const isQuoted = index % 2 === 1;
                  return (
                    <Text
                      key={index}
                      className={
                        isQuoted ? "text-primary-500" : "text-typography-500"
                      }
                    >
                      {part}
                    </Text>
                  );
                })}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingLayout;
