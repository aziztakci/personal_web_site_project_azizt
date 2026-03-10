import Header from "./components/Header";
import SiteContextProvider from "./contexts/SiteContext";

function App() {
  return (
    <SiteContextProvider>
      <Header />
      {/*<Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />*/}
    </SiteContextProvider>
  );
}

export default App;
