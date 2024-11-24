const getLandingPageContent = (lang: string) => {
  switch (lang) {
    case "ta":
      return {
        title: "சாரதி",
      };
    case "hi":
      return {
        title: "ड्राइवर",
      };
    default:
      return {
        title: "Saarathi",
      };
  }
};

export default getLandingPageContent;
