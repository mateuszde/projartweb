import Container from "../../components/Container/Container";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Gallery from "./Gallery";

import { GlassGallery, ConstructionInvestmentsGallery } from "./imagesData";

const Portfolio = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        id="realizacje"
        title="Realizacje"
        text="Zrealizowane projekty to nasza najlepsza wizytówka. Zobacz efekty naszej pracy i przekonaj się o jakości oraz precyzji wykonania."
      >
        <Gallery
          initialImageGallery={GlassGallery}
          galleryTitle="Konstrukcje szklane"
        />

        <Gallery
          initialImageGallery={ConstructionInvestmentsGallery}
          galleryTitle="Prowadzenie inwestycji budowlanych"
        />
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Portfolio;
