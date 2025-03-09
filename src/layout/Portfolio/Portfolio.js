import Container from "../../components/Container/Container";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import { GalleryWrapper } from "./style";
import { ImageGallery } from "react-image-grid-gallery";

import image1 from "../../assets/images/portfolio gallery/1.jpg";
import image3 from "../../assets/images/portfolio gallery/3.jpg";
import image4 from "../../assets/images/portfolio gallery/4.jpg";
import image5 from "../../assets/images/portfolio gallery/5.jpg";
import image6 from "../../assets/images/portfolio gallery/6.jpg";
import image7 from "../../assets/images/portfolio gallery/7.jpg";
import image8 from "../../assets/images/portfolio gallery/8.jpg";
import image13 from "../../assets/images/portfolio gallery/13.jpg";

const IMAGES_GALLERY = [
  {
    alt: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    caption: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    src: image1,
  },
  {
    alt: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    caption: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    src: image3,
  },
  {
    alt: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    caption: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    src: image4,
  },
  {
    alt: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    caption: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    src: image5,
  },
  {
    alt: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    caption: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    src: image6,
  },
  {
    alt: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    caption: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    src: image7,
  },
  {
    alt: "Kabina prysznicowa - szkło: 8mm ESG Optiwhite",
    caption: "Kabina prysznicowa - szkło: 8mm ESG Optiwhite",
    src: image8,
  },

  {
    alt: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    caption: "Balustrada szklana - szkło: VSG ESG 10.10.4",
    src: image13,
  },
];

const Portfolio = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        title="Realizacje"
        text="Zrealizowane projekty to nasza najlepsza wizytówka. Zobacz efekty naszej pracy i przekonaj się o jakości oraz precyzji wykonania."
      >
        <GalleryWrapper>
          <ImageGallery
            imagesInfoArray={IMAGES_GALLERY}
            columnCount={2}
            columnWidth={350}
            gapSize={10}
          />
        </GalleryWrapper>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Portfolio;
