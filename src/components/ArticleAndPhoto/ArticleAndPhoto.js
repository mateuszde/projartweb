import { SectionWrapper, ImageWrapper, TextWrapper } from "./style";
import Image from "../Image/Image";

const ArticleAndPhoto = ({ textfirst, image, altText, children }) => {
  return (
    <SectionWrapper>
      <ImageWrapper textfirst={textfirst}>
        <Image src={image} altText={altText} />
      </ImageWrapper>
      <TextWrapper textfirst={textfirst}>{children}</TextWrapper>
    </SectionWrapper>
  );
};

export default ArticleAndPhoto;
