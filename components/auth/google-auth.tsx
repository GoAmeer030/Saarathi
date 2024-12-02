import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { supabase } from "@/lib/supabase";
import { GOOGLE_OAUTH_CLIENT_ID } from "@/constants";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import getPageTextContent from "@/assets/content/getPageTextContent";
import useLanguageStore from "@/store/useLanguageStore";
import { languageType } from "@/types/general-types";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import GoogleLogo from "@/components/logo/GoogleLogo";

const GoogleSignInButton = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_OAUTH_CLIENT_ID,
  });

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      if (userInfo.data && userInfo.data.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: userInfo.data.idToken,
        });
        console.log(error, data);
      } else {
        throw new Error("no ID token present!");
      }
    } catch (error: any) {
      console.log(error, error.code);
    }
  };

  const { lang } = useLocalSearchParams();
  const { language, setLanguage } = useLanguageStore();

  const textContent = getPageTextContent("landing", language);

  useEffect(() => {
    if (lang && lang !== language) {
      setLanguage(lang as languageType);
    }
  }, [lang, language, setLanguage]);

  return (
    <Button
      className="m-3 h-11 w-[90%] rounded-lg"
      size="lg"
      variant="solid"
      action="primary"
      gap-2
      onPress={handleSignIn}
    >
      <ButtonIcon>
        <GoogleLogo />
      </ButtonIcon>
      <ButtonText className="font-semibold text-typography-0">
        {textContent.buttonText}
      </ButtonText>
    </Button>
  );
};

export default GoogleSignInButton;
