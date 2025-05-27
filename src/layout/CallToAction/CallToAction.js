import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Paragraph from "../../components/Paragraph/Paragraph";
import { NavHashLink } from "react-router-hash-link";

import {
  Wrapper,
  ContainerWrapper,
  BackgroundImage,
  StyledHeading2,
  ButtonsWrapper,
} from "./style";
import image from "../../assets/images/CallToActionBGC.jpg";

const CallToAction = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image} alt="Betonowe tło" />
      <Container>
        <ContainerWrapper>
          <StyledHeading2>Planujesz inwestycję?</StyledHeading2>
          <Paragraph light="true">
            Skontaktuj się z nami i przekonaj się, jak możemy pomóc zrealizować
            Twoją wizję.
          </Paragraph>
          <ButtonsWrapper>
            <NavHashLink to="projartweb#kontakt">
              <Button transparent>Zadzwoń teraz</Button>
            </NavHashLink>
          </ButtonsWrapper>
        </ContainerWrapper>
      </Container>
    </Wrapper>
  );
};

export default CallToAction;
