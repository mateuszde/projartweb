import Paragraph from "../Paragraph/Paragraph";
import { Wrapper, TitleWrapper, Title } from "./style";

const TextWithChildrenComponent = ({ id, title, text, children }) => {
  return (
    <Wrapper id={id}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Paragraph>{text}</Paragraph>
      </TitleWrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default TextWithChildrenComponent;
