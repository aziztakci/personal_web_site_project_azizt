
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SiteContextProvider from "./contexts/SiteContext";




function App() {
  
  return (
    <SiteContextProvider >
      
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      {/*
      <Projects />
      <Footer />*/}
    </SiteContextProvider>
  );
}

export default App;
