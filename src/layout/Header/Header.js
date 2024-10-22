import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Paragraph from "../../components/Paragraph/Paragraph";
import ShapeDividerBottom from "../../components/ShapeDividerBottom/ShapeDividerBottom";

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
          <StyledHeading1>Lorem Ipsum jest tekstem stosowanym.</StyledHeading1>
          <Paragraph light="true">
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            nieznanego drukarza do wypełnienia tekstem próbnej książki.
          </Paragraph>
          <ButtonsWrapper>
            <Button white>Poznaj ofertę</Button>
            <Button transparent>Poznaj ofertę</Button>
          </ButtonsWrapper>
        </ContainerWrapper>
      </Container>
      <ShapeDividerBottom />
    </Wrapper>
  );
};

export default Header;
