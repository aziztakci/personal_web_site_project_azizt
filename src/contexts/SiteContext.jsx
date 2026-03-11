import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { data as initialData } from "../data";

export const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("language", "en");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [siteData, setSiteData] = useState(initialData);

  const toggleLang = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const values = {
    lang,
    toggleLang,
    theme,
    toggleTheme,
    siteData,
  };

  return (
    <SiteContext.Provider value={values}>
      <div className={`min-w-160 ${theme === "dark" ? "bg-background-dark" : "bg-white"}`}>
        <div className="max-w-360 mx-auto pl-31.25 pr-43.75 ">{children}</div>
      </div>
    </SiteContext.Provider>
  );
};
export default SiteContextProvider;
