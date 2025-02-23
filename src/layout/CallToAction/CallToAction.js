import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Paragraph from "../../components/Paragraph/Paragraph";

import {
  Wrapper,
  ContainerWrapper,
  BackgroundImage,
  StyledHeading2,
  ButtonsWrapper,
} from "./style";
import image from "../../assets/images/bgc3.jpg";

const CallToAction = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image} />
      <Container>
        <ContainerWrapper>
          <StyledHeading2>Planujesz inwestycję? </StyledHeading2>
          <Paragraph light="true">
            Skontaktuj się z nami i przekonaj się, jak możemy pomóc zrealizować
            Twoją wizję.
          </Paragraph>
          <ButtonsWrapper>
            <Button transparent>Zadzwón teraz</Button>
          </ButtonsWrapper>
        </ContainerWrapper>
      </Container>
    </Wrapper>
  );
};

export default CallToAction;
