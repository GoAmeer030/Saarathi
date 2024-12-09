import useLanguageStore from "@/store/useLanguageStore";
import getPageTextContent from "@/assets/content/getPageTextContent";
import { useEffect } from "react";
import { languageType } from "@/types/general-types";
import { useLocalSearchParams } from "expo-router";

export const useLanguage = (page: string) => {
  const { lang } = useLocalSearchParams();
  const { language, setLanguage } = useLanguageStore();

  const textContent = getPageTextContent(page, language);

  useEffect(() => {
    if (lang && lang !== language) {
      setLanguage(lang as languageType);
    }
  }, [lang, language, setLanguage]);

  return textContent;
};
