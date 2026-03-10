import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const SiteContext = createContext();

const SiteContextProvider = ({children}) => {

    const [lang,setLang] = useLocalStorage("language", "en");
    const [theme,setTheme] = useLocalStorage("theme", "light");

    const toggleLang = () => {
        setLang(lang==="en" ? "tr" : "en");
    };

    const toggleTheme = () => {
        setTheme(theme==="light" ? "dark" : "light");
    };

    const values = {
        lang,
        toggleLang,
        theme,
        toggleTheme,
    };

    return (
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    )


}
export default SiteContextProvider;