import getLandingPageContent from "./landingPageTextContent";

const getPageTextContent = (page: string, lang: string): any => {
  switch (page) {
    case "landing":
      return getLandingPageContent(lang);
    default:
      throw new Error("Invalid page");
  }
};

export default getPageTextContent;
