import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Hero() {
  const { siteData, lang, theme } = useContext(SiteContext);
  const heroData = siteData[lang].heroSection;
  //mr-[50px]
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-17 mt-23.25">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <div className="bg-indigoo w-25.5 h-0.5"></div>
          <span className="text-indigoo text-xl font-semibold">
            {heroData.name}
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[42px] md:text-[72px]  font-bold text-main-dark leading-none tracking-[0.3px]">
            {heroData.greeting}
          </h1>
          <h1 className="text-[42px] md:text-[72px] font-bold text-main-dark leading-none tracking-[0.3px]">
            {heroData.intro}
          </h1>
        </div>

        <p className="text-lg text-dim-gray mr-15 tracking-[0.3px] " >{heroData.ctaHTML}</p>
        <div className="flex item-center gap-3">
          <button className="border px-8 py-3 rounded-md font-bold text-lg cursor-pointer text-soft-purple bg-brand-purple hover:bg-deep-purple hover:text-white  border-brand-purple transition-colors">
            {lang === "en" ? "Hire me" : "Beni işe al"}
          </button>

          {heroData.socials.map((e, index) => (
            <button
              key={index}
              className={` flex item-center border pr-5 pl-2.5 py-3 rounded-md font-semibold text-lg cursor-pointer gap-2.5
                ${
                  theme === "light"
                    ? "text-brand-purple hover:bg-soft-purple transition-colors  border-brand-purple"
                    : "text-soft-purple hover:bg-soft-purple hover:text-[#1F2937] transition-colors  border-soft-purple"
                }`}
            >
              <img className="w-6.5 h-6.5" src={e.img} alt={e.name} />
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
