import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Profile() {
  const { siteData, lang, theme } = useContext(SiteContext);
  const profileData = siteData[lang].profileSection;

  return (
    <div>
      <div className="w-[99.47%] ml-auto h-0.5 mt-10.5 bg-light-purple"></div>
      <h2
        className={`text-5xl font-semibold text-center lg:text-left mt-10 mb-8.75 ${
          theme === "light" ? "text-main-dark " : "text-main-gray"
        }`}
      >
        {profileData.title}
      </h2>

      <div className="flex flex-col lg:flex-row gap-y-15">
        <div className="flex flex-col">
            <h3
          className={`text-3xl font-medium ${
            theme === "light" ? "text-indigoo " : "text-indigoo-subtle"
          }`}
        >
          {profileData.title}
        </h3>

        <div className="flex flex-col gap-5 mt-5">
          {profileData.profile.map((e, index) => (
            <div key={`profile-row-${index}`} className="flex gap-5">
              <h4 className={`font-semibold text-lg w-39 shrink-0 ${theme==="light" ?
                "text-pure-black":
                "text-pure-white"
              } `}>{e.label}</h4>
              <span className={`flex-1 text-lg w-57.5 ${theme==="light" ?
                "text-pure-black":
                "text-pure-white"}`}>{e.value}</span>
            </div>
          ))}
        </div>
        </div>
        
        <div className="flex flex-col lg:mr-28.25 lg:ml-14.25 gap-3.75">
            <h3 className={`text-3xl font-medium ${
            theme === "light" ? "text-indigoo " : "text-indigoo-subtle"
          }`}>{profileData.aboutTitle}</h3>
            <p className={`whitespace-pre-line text-lg  ${
                theme === "light" ? "text-dim-gray " : "text-pure-white"
              }`}>{profileData.aboutText}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
