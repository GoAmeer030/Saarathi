const getLandingPageContent = (lang: string) => {
  switch (lang) {
    case "ta":
      return {
        title: "சாரதி",
        buttonText: "வாங்க போகலாம்!!",
        selectLanguage: "உங்கள் மொழியுடன் தொடங்குவோம்!",
      };
    case "hi":
      return {
        title: "सारथी",
        buttonText: "आओ चलना शुरू करें!!",
        selectLanguage: "आइए आपकी भाषा से शुरुआत करें!",
      };
    default:
      return {
        title: "Saarathi",
        buttonText: "Let's Get Going!!",
        selectLanguage: "Let's Start With Your Language!",
      };
  }
};

export default getLandingPageContent;
