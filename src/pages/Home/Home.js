import Cards from "../../components/Cards/Cards";
import Header from "../../layout/Header/Header";
import Portfolio from "../../layout/Portfolio/Portfolio";
import Services from "../../layout/Services/Services";
import Contact from "../../layout/Contact/Contact";
import AboutUs from "../../layout/AboutUs/AboutUs";
import CallToAction from "../../layout/CallToAction/CallToAction";

const Home = () => {
  return (
    <main>
      <Header />
      <AboutUs />
      <Cards />
      <Services />
      <CallToAction />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
