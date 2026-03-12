import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { data as initialData } from "../data";
import { useAxios } from "../hooks/useAxios";
import { toast } from "react-toastify";

export const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("language", "en");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [siteData, setSiteData] = useState(initialData);

  const { sendRequest, loading } = useAxios();

 useEffect(() => {
  sendRequest("post", "https://dummyjson.com/posts/add", {
    title: "Portfolio Sync",
    userId: 5,
    body: initialData, 
  })
    .then((res) => {
      console.log("API bağlantısı başarılı! Veri senkronize ediliyor...");
      if (res.body) {
        setSiteData(res.body); 
        console.log("Site verisi API'den gelen veriyle güncellendi.");
      }
    })
    .catch((err) => {
      console.error("API hatası! Yerel verilerle devam ediliyor:", err);
    });
}, []);

  {/* isVisible ve hemen altındaki useEffect yukarı çıkma butonu için hazırlandı */}
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleLang = () => {
  const nextLang = lang === "en" ? "tr" : "en";
  setLang(nextLang);
  
  const messages = {
    tr: "Dil Türkçe olarak değiştirildi",
    en: "Language changed to English"
  };
  
  toast.success(messages[nextLang]); 
};

  const toggleTheme = () => {
  const nextTheme = theme === "light" ? "dark" : "light";
  setTheme(nextTheme);

  const messages = {
    tr: {
      dark: "Gece Modu Etkin",
      light: "Gündüz Modu Etkin"
    },
    en: {
      dark: "Dark Mode Enabled",
      light: "Light Mode Enabled"
    }
  };
  toast.success(messages[lang][nextTheme]);
};

  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  const values = {
    lang,
    toggleLang,
    theme,
    toggleTheme,
    siteData,
    scrollToSection,
    isVisible,
    loading
  };

  return (
    <SiteContext.Provider value={values}>
      <div className={`${theme === "dark" ? "bg-background-dark" : "bg-white"}`}>
        {loading ? (
          <div className="flex h-screen items-center justify-center text-brand-purple">
            Loading...
          </div>
        ) : (
          children
        )}
      </div>
    </SiteContext.Provider>
  );
};
export default SiteContextProvider;
