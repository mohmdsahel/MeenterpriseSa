import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutUs from "./components/AboutUs";
import Collaboration from "./components/Collaboration";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

import Roadmap from "./components/Agendas";
import Speaker from "./components/Speakers";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <AboutUs />
        <Speaker />
       
        <Roadmap />
        <Collaboration />
        <Pricing />
        <Contact/> 
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
