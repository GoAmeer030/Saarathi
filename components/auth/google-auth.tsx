import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { supabase } from "@/lib/supabase";
import { GOOGLE_OAUTH_CLIENT_ID } from "@/constants";
import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "@/components/ui/button";
import getPageTextContent from "@/assets/content/getPageTextContent";
import useLanguageStore from "@/store/useLanguageStore";
import { languageType } from "@/types/general-types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import GoogleLogo from "@/components/logo/google";
import useUserStore from "@/store/useUserStore";
import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast";
import HelpCircle from "@/components/logo/help-circle";
import { View } from "react-native";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { User } from "@/types/general-types";

const GoogleSignInButton = () => {
  const { setUser } = useUserStore();

  const { lang } = useLocalSearchParams();
  const { language, setLanguage } = useLanguageStore();

  const textContent = getPageTextContent("landing", language);

  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (lang && lang !== language) {
      setLanguage(lang as languageType);
    }
  }, [lang, language, setLanguage]);

  const toast = useToast();

  const showFailedToast = () => {
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;

        return (
          <Toast
            action="error"
            variant="outline"
            nativeID={toastId}
            className="top-8 mx-auto flex w-[90%] flex-row gap-2 border-error-500"
          >
            <View className="h-5 w-5">
              <HelpCircle />
            </View>
            <View className="w-full">
              <ToastTitle className="font-semibold text-error-500">
                {textContent.failedToastTitle}
              </ToastTitle>
              <ToastDescription className="sm">
                {textContent.failedToastDescription}
              </ToastDescription>
            </View>
          </Toast>
        );
      },
    });
  };

  const showSuccessToast = (user: User) => {
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast
            nativeID={toastId}
            className="top-8 mx-auto w-[90%] max-w-md flex-row gap-3 bg-background-0 p-4"
          >
            <Avatar>
              <AvatarFallbackText>{user?.name[0]}</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: user?.pictureUrl,
                }}
              />
            </Avatar>
            <VStack className="w-[85%]">
              <HStack className="w-full justify-between">
                <Heading
                  size="sm"
                  className="font-semibold text-typography-950"
                >
                  {textContent.successToastTitle + " " + user?.name + "!"}
                </Heading>
              </HStack>
              <Text size="sm" className="text-typography-500">
                {textContent.successToastDescription}
              </Text>
            </VStack>
          </Toast>
        );
      },
    });
  };

  GoogleSignin.configure({
    webClientId: GOOGLE_OAUTH_CLIENT_ID,
  });

  const handleSignIn = async () => {
    setShowSpinner(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.data && userInfo.data.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: userInfo.data.idToken,
        });
        if (error) {
          showFailedToast();
        } else if (data) {
          setUser({
            name: data.user?.user_metadata?.full_name || "",
            email: data.user?.email || "",
            phone: data.user?.phone || "",
            pictureUrl: data.user?.user_metadata?.avatar_url || "",
          });

          showSuccessToast({
            name: data.user?.user_metadata?.full_name || "",
            email: data.user?.email || "",
            phone: data.user?.phone || "",
            pictureUrl: data.user?.user_metadata?.avatar_url || "",
          });
        }
      } else {
        showFailedToast();
      }
    } catch (error: any) {
      console.log(error, error.code);
      showFailedToast();
    }
    setShowSpinner(false);
  };

  return (
    <Button
      className="m-3 h-11 w-[90%] rounded-lg"
      size="lg"
      variant="solid"
      action="primary"
      gap-2
      onPress={handleSignIn}
    >
      <View className="w-[8%]">
        {showSpinner ? (
          <ButtonSpinner color={"white"} />
        ) : (
          <ButtonIcon>
            <GoogleLogo />
          </ButtonIcon>
        )}
      </View>
      <ButtonText className="font-semibold text-typography-0">
        {textContent.buttonText}
      </ButtonText>
    </Button>
  );
};

export default GoogleSignInButton;
