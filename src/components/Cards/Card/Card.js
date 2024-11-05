import Paragraph from "../../Paragraph/Paragraph";
import { Wrapper, CardTitleWrapper, Icon } from "./style";

const Card = ({ icon, title, description }) => {
  return (
    <Wrapper>
      <CardTitleWrapper>
        <Icon>{icon}</Icon>
        <h3>{title}</h3>
      </CardTitleWrapper>

      <Paragraph>{description}</Paragraph>
    </Wrapper>
  );
};

export default Card;
