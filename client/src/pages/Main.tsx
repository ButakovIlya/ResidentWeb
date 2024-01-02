import Benefits from "../components/Benefits/Benefits";
import CtaBlock from "../components/CTA/CtaBlock";
import ContactForm from "../components/ContactForm/ContactForm";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Pluses from "../components/Pluses/Pluses";

const Main = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Benefits />
      <Pluses />
      <CtaBlock />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Main;
