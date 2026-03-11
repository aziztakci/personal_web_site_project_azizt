import React, { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function ScrollToTop() {
  
  const { scrollToSection, theme, isVisible } = useContext(SiteContext);

  

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={() => scrollToSection("header")}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
            theme === "light" 
              ? "bg-brand-purple text-white" 
              : "bg-button-gray text-axios-purple border border-axios-purple"
          }`}
        >
          
          <svg 
            xmlns="../assets/images/up.png" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="螺旋 5 10l7-7m0 0l7 7m-7-7v18" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7 7 7M12 3v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;