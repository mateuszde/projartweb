import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../../components/Container/Container";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import image1 from "../../assets/images/portfolio gallery/1.jpg";
import image3 from "../../assets/images/portfolio gallery/3.jpg";
import image4 from "../../assets/images/portfolio gallery/4.jpg";
import image5 from "../../assets/images/portfolio gallery/5.jpg";
import image6 from "../../assets/images/portfolio gallery/6.jpg";
import image7 from "../../assets/images/portfolio gallery/7.jpg";
import image8 from "../../assets/images/portfolio gallery/8.jpg";
import image13 from "../../assets/images/portfolio gallery/13.jpg";

const initialImagesGallery = [
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

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); /* Maksymalnie 4 obrazy w rzędzie */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1; /* Wszystkie obrazki są kwadratowe */
`;

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Dopasowanie do kafelka bez deformacji */
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PortfolioFeature = () => {
  const [imagesGallery, setImagesGallery] = useState(initialImagesGallery);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const updatedImages = initialImagesGallery.map((image) => {
      const img = new Image();
      img.src = image.src;
      return new Promise((resolve) => {
        img.onload = () => {
          resolve({ ...image, width: img.width, height: img.height });
        };
      });
    });

    Promise.all(updatedImages).then((loadedImages) => {
      setImagesGallery(loadedImages);
    });
  }, []);
  return (
    <Container>
      <TextWithChildrenComponent
        id="realizacje"
        title="Realizacje"
        text="Zrealizowane projekty to nasza najlepsza wizytówka. Zobacz efekty naszej pracy i przekonaj się o jakości oraz precyzji wykonania."
      >
        <GalleryContainer>
          {imagesGallery.map((image, i) => (
            <ImageWrapper key={i}>
              <ImageItem
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onClick={() => {
                  setSelectedIndex(i);
                  setLightboxOpen(true);
                }}
              />
            </ImageWrapper>
          ))}
        </GalleryContainer>

        {lightboxOpen && (
          <Lightbox
            images={imagesGallery.map((img) => ({
              url: img.src,
              title: img.caption,
            }))}
            startIndex={selectedIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </TextWithChildrenComponent>
    </Container>
  );
};

export default PortfolioFeature;
