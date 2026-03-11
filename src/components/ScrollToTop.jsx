import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function ScrollToTop() {
  const { scrollToSection, theme, isVisible } = useContext(SiteContext);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => scrollToSection("header")}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
          theme === "light" 
            ? "bg-brand-purple text-white" 
            : "bg-button-gray text-axios-purple border border-axios-purple"
        }`}
      >
        <svg 
          
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
         
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={3} 
            d="M5 10l7-7 7 7M12 3v18" 
          />
        </svg>
      </button>
    </div>
  );
}

export default ScrollToTop;