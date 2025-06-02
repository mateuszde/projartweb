import Cards from "../../components/Cards/Cards";
import Header from "../../layout/Header/Header";
import Services from "../../layout/Services/Services";
import Contact from "../../layout/Contact/Contact";
import AboutUs from "../../layout/AboutUs/AboutUs";
import CallToAction from "../../layout/CallToAction/CallToAction";
import Portfolio from "../../layout/Portfolio/Portfolio";

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <Cards />
      <CallToAction />

      <AboutUs />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
