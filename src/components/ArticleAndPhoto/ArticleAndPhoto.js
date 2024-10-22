import { SectionWrapper, ImageWrapper, TextWrapper } from "./style";
import Image from "../Image/Image";

const ArticleAndPhoto = ({ textFirst, image }) => {
  return (
    <SectionWrapper>
      <ImageWrapper textFirst={textFirst}>
        <Image src={image} />
      </ImageWrapper>
      <TextWrapper textFirst={textFirst}>TEKST</TextWrapper>
    </SectionWrapper>
  );
};

export default ArticleAndPhoto;
