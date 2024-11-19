import Cards from "../../components/Cards/Cards";
import Header from "../../layout/Header/Header";
import Portfolio from "../../layout/Portfolio/Portfolio";
import Services from "../../layout/Services/Services";
import Contact from "../../layout/Contact/Contact";

const Home = () => {
  return (
    <main>
      <Header />
      <Cards />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
