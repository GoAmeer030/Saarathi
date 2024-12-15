const getTabsContent = (lang: string) => {
  switch (lang) {
    case "ta":
      return {
        home: "முகப்பு",
        search: "தேடல்",
        tools: "அம்சங்கள்",
        profile: "சுயவிவரம்",
      };
    case "hi":
      return {
        home: "होम",
        search: "खोज",
        tools: "विशेषताएँ",
        profile: "प्रोफ़ाइल",
      };
    default:
      return {
        home: "Home",
        search: "Search",
        tools: "Tools",
        profile: "Profile",
      };
  }
};

export default getTabsContent;
