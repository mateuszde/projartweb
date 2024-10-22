import Paragraph from "../Paragraph/Paragraph";
import { Wrapper, TitleWrapper } from "./style";

const TextWithChildrenComponent = ({ title, text, children }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h2>{title}</h2>
        <Paragraph>{text}</Paragraph>
      </TitleWrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default TextWithChildrenComponent;
