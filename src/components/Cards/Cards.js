import Container from "../Container/Container";
import Card from "./Card/Card";
import TextWithChildrenComponent from "../TextWithChildrenComponent/TextWithChildrenComponent";
import { Wrapper, Title } from "./style";
import { CgDatabase } from "react-icons/cg";

const CARDS = [
  {
    id: 1,
    icon: <CgDatabase />,
    title: "Doświadczenie",
    description:
      "Ponad 20 lat na rynku – setki zrealizowanych inwestycji i zadowolonych klientów.",
  },
  {
    id: 2,
    icon: <CgDatabase />,
    title: "Innowacja",
    description:
      "Nowoczesne rozwiązania dopasowane do indywidualnych potrzeb każdej inwestycji.",
  },
  {
    id: 3,
    icon: <CgDatabase />,
    title: "Precyzja",
    description: "Dbałość o każdy detal – od projektu po wykonanie.",
  },
  {
    id: 4,
    icon: <CgDatabase />,
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
