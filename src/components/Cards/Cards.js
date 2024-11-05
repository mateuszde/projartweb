import Container from "../Container/Container";
import Card from "./Card/Card";
import { Wrapper } from "./style";

const CARDS = [
  {
    id: 1,
    icon: "",
    title: "nazwa",
    description:
      "Krótki opis zachęcający czy cokolwiek. A może coś innego, kto to wie.",
  },
  {
    id: 2,
    icon: "",
    title: "nazwa",
    description:
      "Krótki opis zachęcający czy cokolwiek. A może coś innego, kto to wie.",
  },
  {
    id: 3,
    icon: "",
    title: "nazwa",
    description:
      "Krótki opis zachęcający czy cokolwiek. A może coś innego, kto to wie.",
  },
  {
    id: 4,
    icon: "",
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
