import Container from "../../components/Container/Container";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import { GalleryWrapper } from "./style";
import { ImageGallery } from "react-image-grid-gallery";

import image1 from "../../assets/images/portfolio gallery/1.jpg";
import image2 from "../../assets/images/portfolio gallery/2.jpg";
import image3 from "../../assets/images/portfolio gallery/3.jpg";
import image4 from "../../assets/images/portfolio gallery/4.jpg";
import image5 from "../../assets/images/portfolio gallery/5.jpg";
import image6 from "../../assets/images/portfolio gallery/6.jpg";
import image7 from "../../assets/images/portfolio gallery/7.jpg";
import image8 from "../../assets/images/portfolio gallery/8.jpg";
import image9 from "../../assets/images/portfolio gallery/9.jpg";
import image10 from "../../assets/images/portfolio gallery/10.png";
import image11 from "../../assets/images/portfolio gallery/11.png";

const IMAGES_GALLERY = [
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image1,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image2,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image3,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image4,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image5,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image6,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image7,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image8,
  },
  {
    alt: "Krótki opis",
    caption: "Krótki opis",
    src: image9,
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
            columnCount={"auto"}
            columnWidth={350}
            gapSize={20}
          />
        </GalleryWrapper>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Portfolio;
