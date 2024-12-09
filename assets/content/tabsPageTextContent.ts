const getTabsContent = (lang: string) => {
  switch (lang) {
    case "ta":
      return {
        home: "முகப்பு",
        logout: "வெளியேறு",
      };
    case "hi":
      return {
        home: "होम",
        logout: "लॉग आउट",
      };
    default:
      return {
        home: "Home",
        logout: "Logout",
      };
  }
};

export default getTabsContent;
