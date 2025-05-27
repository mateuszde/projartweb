import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Paragraph from "../../components/Paragraph/Paragraph";
import { NavHashLink } from "react-router-hash-link";

import {
  Wrapper,
  ContainerWrapper,
  BackgroundImage,
  StyledHeading1,
  ButtonsWrapper,
} from "./style";

import image from "../../assets/images/HeroImage.jpg";

const Header = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image} alt="Konstrukca, budynek, tło nagłówka" />
      <Container>
        <ContainerWrapper>
          <StyledHeading1>Z pasji do nowoczesnego budownictwa.</StyledHeading1>
          <Paragraph light="true">
            Tworzymy nowoczesne przestrzenie z dbałością o każdy detal.
            Doświadczenie, innowacja i pasja – to fundamenty naszych realizacji.
          </Paragraph>
          <ButtonsWrapper>
            <NavHashLink to="/projartweb#oferta">
              <Button white>Poznaj ofertę</Button>
            </NavHashLink>
            <NavHashLink to="/projartweb#onas">
              <Button transparent>O firmie</Button>
            </NavHashLink>
          </ButtonsWrapper>
        </ContainerWrapper>
      </Container>
      {/* <ShapeDividerBottom /> */}
    </Wrapper>
  );
};

export default Header;
