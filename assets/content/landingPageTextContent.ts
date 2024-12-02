const getLandingPageContent = (lang: string) => {
  switch (lang) {
    case "ta":
      return {
        title: "சாரதி",
        buttonText: "கூகுள் உடன் தொடரவும்!!",
        disclaimer:
          "*தொடர்வதன் மூலம், எங்கள் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஏற்கிறீர்கள்",
        selectLanguage: "உங்கள் மொழியுடன் தொடங்குவோம்!",
      };
    case "hi":
      return {
        title: "सारथी",
        buttonText: "गूगल के साथ जारी रखें!!",
        disclaimer:
          "*जारी रखकर, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं",
        selectLanguage: "आइए आपकी भाषा से शुरुआत करें!",
      };
    default:
      return {
        title: "Saarathi",
        buttonText: "Continue With Google!!",
        disclaimer:
          "*By continuing, you agree to our Terms of Service and Privacy Policy",
        selectLanguage: "Let's Begin With Your Language!",
      };
  }
};

export default getLandingPageContent;
