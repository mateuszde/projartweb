import Container from "../Container/Container";
import styled from "styled-components";
import Card from "./Card/Card";
import TextWithChildrenComponent from "../TextWithChildrenComponent/TextWithChildrenComponent";
import { Wrapper } from "./style";
import experienceIcon from "../../assets/icons/experience.svg";
import innovationIcon from "../../assets/icons/innovation.svg";
import precisionIcon from "../../assets/icons/precision.svg";
import trustIcon from "../../assets/icons/trust.svg";

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const CARDS = [
  {
    id: 1,
    icon: <StyledIcon src={experienceIcon} alt="Doświadczenie" />,
    title: "Doświadczenie",
    description:
      "Ponad 20 lat na rynku – setki zrealizowanych inwestycji i zadowolonych klientów.",
  },
  {
    id: 2,
    icon: <StyledIcon src={innovationIcon} alt="Innowacje" />,

    title: "Innowacja",
    description:
      "Nowoczesne rozwiązania dopasowane do indywidualnych potrzeb każdej inwestycji.",
  },
  {
    id: 3,
    icon: <StyledIcon src={precisionIcon} alt="Prezycja" />,

    title: "Precyzja",
    description: "Dbałość o każdy detal – od projektu po wykonanie.",
  },
  {
    id: 4,
    icon: <StyledIcon src={trustIcon} alt="Zaufanie" />,

    title: "Zaufanie",
    description: "Rzetelność i terminowość, na których możesz polegać.",
  },
];

const Cards = () => {
  return (
    <Container>
      <TextWithChildrenComponent title="Dlaczego my?" text="">
        <Wrapper>
          {CARDS.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Wrapper>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Cards;
