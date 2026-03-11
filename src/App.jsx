
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import SiteContextProvider from "./contexts/SiteContext";




function App() {
  
  return (
    <SiteContextProvider >
      
      <Header />
      <Hero />
      <Skills />
      <Profile />
      {/*
      <Projects />
      <Footer />*/}
    </SiteContextProvider>
  );
}

export default App;
