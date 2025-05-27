import Cards from "../../components/Cards/Cards";
import Header from "../../layout/Header/Header";
import Portfolio from "../../layout/Portfolio/Portfolio";
import Services from "../../layout/Services/Services";
import Contact from "../../layout/Contact/Contact";
import AboutUs from "../../layout/AboutUs/AboutUs";
import CallToAction from "../../layout/CallToAction/CallToAction";
import PortfolioFeature from "../../layout/PortfolioFeature/PortfolioFeature";

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <Cards />
      <CallToAction />

      <AboutUs />
      {/* <Portfolio /> */}
      <PortfolioFeature />
      <Contact />
    </main>
  );
};

export default Home;
