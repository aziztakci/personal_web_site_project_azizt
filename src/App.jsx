
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import SiteContextProvider from "./contexts/SiteContext";
import { ToastContainer } from 'react-toastify';




function App() {
  
  return (
    <SiteContextProvider >
      
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </SiteContextProvider>
  );
}

export default App;
