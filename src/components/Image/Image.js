import { StyledImage } from "./style";

const Image = ({ src, altText, ...props }) => {
  return <StyledImage src={src} alt={altText} {...props} />;
};

export default Image;
