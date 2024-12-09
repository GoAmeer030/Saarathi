import getLandingPageContent from "./landingPageTextContent";
import getTabsContent from "./tabsPageTextContent";

const getPageTextContent = (page: string, lang: string): any => {
  switch (page) {
    case "landing":
      return getLandingPageContent(lang);
    case "tabs":
      return getTabsContent(lang);
    default:
      throw new Error("Invalid page");
  }
};

export default getPageTextContent;
