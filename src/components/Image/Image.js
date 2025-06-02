import { StyledImage, Wrapper, Square } from "./style";

const Image = ({ src, altText, ...props }) => {
  return (
    <Wrapper>
      <Square />
      <StyledImage src={src} loading="lazy" alt={altText} {...props} />
    </Wrapper>
  );
};

export default Image;
