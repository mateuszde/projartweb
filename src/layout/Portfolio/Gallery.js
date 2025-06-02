import { useState, useEffect } from "react";
import styled from "styled-components";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const Wrapper = styled.div`
  margin-top: 80px;
`;
const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
`;
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

const Gallery = ({ initialImageGallery, galleryTitle }) => {
  const [imagesGallery, setImagesGallery] = useState(initialImageGallery);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const updatedImages = initialImageGallery.map((image) => {
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
    <Wrapper>
      <Title>{galleryTitle}</Title>
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
    </Wrapper>
  );
};

export default Gallery;
