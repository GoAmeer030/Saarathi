const getLandingPageContent = (lang: string) => {
  switch (lang) {
    case "ta":
      return {
        title: "சாரதி",
        buttonText: "கூகுள் உடன் தொடரவும்!!",
        disclaimer:
          "*தொடர்வதன் மூலம், எங்கள் சேவை விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஏற்கிறீர்கள்",
        selectLanguage: "உங்கள் மொழியுடன் தொடங்குவோம்!",
        failedToastTitle: "ஏதோ, தவறாகிவிட்டது!!",
        failedToastDescription:
          "ஏதோ, தவறாகிவிட்டது! தயவுசெய்து, பிறகு முயற்சிக்கவும்!!",
        successToastTitle: "வரவேற்க்கை!",
        successToastDescription: "நீங்கள் வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்!!",
      };
    case "hi":
      return {
        title: "सारथी",
        buttonText: "गूगल के साथ जारी रखें!!",
        disclaimer:
          "*जारी रखकर, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं",
        selectLanguage: "आइए आपकी भाषा से शुरुआत करें!",
        failedToastTitle: "कुछ गलत हो गया!!",
        failedToastDescription:
          "कुछ गलत हो गया! कृपया, बाद में पुनः प्रयास करें!!",
        successToastTitle: "स्वागत है!",
        successToastDescription: "आपने सफलतापूर्वक लॉग इन कर लिया है!!",
      };
    default:
      return {
        title: "Saarathi",
        buttonText: "Continue With Google!!",
        disclaimer:
          "*By continuing, you agree to our Terms of Service and Privacy Policy",
        selectLanguage: "Let's Begin With Your Language!",
        failedToastTitle: "Something Went Wrong!!",
        failedToastDescription:
          "Something, went wrong! Please, Try again later!!",
        successToastTitle: "Welcome!",
        successToastDescription: "You have successfully logged in!!",
      };
  }
};

export default getLandingPageContent;
