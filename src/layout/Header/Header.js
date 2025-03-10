import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Paragraph from "../../components/Paragraph/Paragraph";

import {
  Wrapper,
  ContainerWrapper,
  BackgroundImage,
  StyledHeading1,
  ButtonsWrapper,
} from "./style";
import image from "../../assets/images/Designer.jpeg";

const Header = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image} />
      <Container>
        <ContainerWrapper>
          <StyledHeading1>Z pasji do nowoczesnego budownictwa.</StyledHeading1>
          <Paragraph light="true">
            Tworzymy nowoczesne przestrzenie z dbałością o każdy detal.
            Doświadczenie, innowacja i pasja – to fundamenty naszych realizacji.
          </Paragraph>
          <ButtonsWrapper>
            <Button white>Poznaj ofertę</Button>
            <Button transparent>O firmie</Button>
          </ButtonsWrapper>
        </ContainerWrapper>
      </Container>
      {/* <ShapeDividerBottom /> */}
    </Wrapper>
  );
};

export default Header;
