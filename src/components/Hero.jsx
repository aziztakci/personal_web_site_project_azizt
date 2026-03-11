import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Hero() {
  const { siteData, lang, theme } = useContext(SiteContext);
  const heroData = siteData[lang].heroSection;
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-17 mt-23.25">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <div className={` w-25.5 h-0.5 ${theme==="light"?
            "bg-indigoo":
            "bg-indigoo-subtle"
          }`}></div>
          <span className={` text-xl font-semibold ${theme==="light" ?
            "text-indigoo":
            "text-indigoo-subtle"
          }`}>
            {heroData.name}
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className={`text-[42px] md:text-[72px]  font-bold  leading-none tracking-[0.3px] ${
            theme==="light" ? "text-main-dark" : "text-main-gray"
          }`}>
            {heroData.greeting}
          </h1>
          <h1 className={`text-[42px] md:text-[72px]  font-bold  leading-none tracking-[0.3px] ${
            theme==="light" ? "text-main-dark" : "text-main-gray"
          }`}>
            {heroData.intro}
          </h1>
        </div>

        <p className={`text-lg  mr-15 tracking-[0.3px] ${theme==="light"?
            "text-dim-gray":
            "text-pure-white"
        }`} >{heroData.ctaHTML}</p>
        <div className="flex item-center gap-3">
          <button className={`border px-8 py-3 rounded-md font-bold text-lg cursor-pointer ${theme==="light" ? 
             "text-soft-purple bg-brand-purple hover:bg-deep-purple hover:text-white  border-brand-purple transition-colors":
             " text-pure-black bg-deep-gray hover:bg-deep-purple hover:text-white  border-brand-purple transition-colors"
          }`}>
            {lang === "en" ? "Hire me" : "Beni işe al"}
          </button>

          {heroData.socials.map((e, index) => (
            <button
              key={index}
              className={` flex item-center border pr-5 pl-2.5 py-3 rounded-md font-semibold text-lg cursor-pointer gap-2.5
                ${
                  theme === "light"
                    ? "text-brand-purple hover:bg-soft-purple transition-colors  border-brand-purple"
                    : "text-deep-gray bg-[#383838] border-deep-gray hover:bg-soft-purple hover:text-[#1F2937] transition-colors  "
                }`}
            >
              <img className="w-6.5 h-6.5" src={theme==="light" ? e.img : e.imgDark} alt={e.name} />
              <span>{e.name}</span>
            </button>
          ))}
        </div>
      </div>
      <img
        className="rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
        src={heroData.profileImage}
        alt="profile_img"
      />
    </div>
  );
}

export default Hero;
