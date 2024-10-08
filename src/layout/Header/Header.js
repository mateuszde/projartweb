import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Paragraph from "../../components/Paragraph/Paragraph";

import {
  Wrapper,
  ContainerWrapper,
  BackgroundImage,
  StyledHeading1,
  ShapeDividerBottom,
} from "./style";
import image from "../../assets/images/Designer.jpeg";

const Header = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image} />
      <Container>
        <ContainerWrapper>
          <StyledHeading1>Lorem Ipsum jest tekstem stosowanym.</StyledHeading1>
          <Paragraph textcolor="white">
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            nieznanego drukarza do wypełnienia tekstem próbnej książki.
          </Paragraph>
          <Button>Poznaj ofertę</Button>
        </ContainerWrapper>
      </Container>
      <ShapeDividerBottom>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"></path>
        </svg>
      </ShapeDividerBottom>
    </Wrapper>
  );
};

export default Header;
