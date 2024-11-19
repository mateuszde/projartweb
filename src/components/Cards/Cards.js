import Container from "../Container/Container";
import Card from "./Card/Card";
import { Wrapper } from "./style";
import { CgDatabase } from "react-icons/cg";

const CARDS = [
  {
    id: 1,
    icon: <CgDatabase />,
    title: "nazwa",
    description:
      "Krótki opis zachęcający czy cokolwiek. A może coś innego, kto to wie.",
  },
  {
    id: 2,
    icon: <CgDatabase />,
    title: "nazwa",
    description:
      "Krótki opis zachęcający czy cokolwiek. A może coś innego, kto to wie.",
  },
  {
    id: 3,
    icon: <CgDatabase />,
    title: "nazwa",
    description:
      "Krótki opis zachęcający czy cokolwiek. A może coś innego, kto to wie.",
  },
  {
    id: 4,
    icon: <CgDatabase />,
    title: "nazwa",
    description:
      "Krótki opis zachęcający czy cokolwiek. A może coś innego, kto to wie.",
  },
];

const Cards = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Cards;
