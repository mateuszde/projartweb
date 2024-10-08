import { StyledParagraph } from "./style";
const Paragraph = ({ children, textcolor }) => {
  return <StyledParagraph textcolor={textcolor}>{children}</StyledParagraph>;
};

export default Paragraph;
