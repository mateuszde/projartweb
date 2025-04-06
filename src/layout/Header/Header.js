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
import image1 from "../../assets/images/hero1.jpg";
import image2 from "../../assets/images/hero2.jpg";
import image3 from "../../assets/images/hero3.jpg";
import image4 from "../../assets/images/hero4.jpg";

const Header = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image1} />
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
