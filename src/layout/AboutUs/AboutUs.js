import { Wrapper, ButtonsWrapper } from "./style";
import ArticleAndPhoto from "../../components/ArticleAndPhoto/ArticleAndPhoto";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Paragraph from "../../components/Paragraph/Paragraph";
import Container from "../../components/Container/Container";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import Button from "../../components/Button/Button";

import image from "../../assets/images/Zespol1.jpg";

const AboutUs = () => {
  return (
    <Container>
      <TextWithChildrenComponent title="O nas" text="" id="onas">
        <ArticleAndPhoto
          textfirst
          image={image}
          altText="Zdjęcie przedstawiające zespół firmy"
        >
          <Wrapper>
            <Paragraph>
              Nasza firma powstała w 2004 roku z pasji do tworzenia nowoczesnych
              rozwiązań budowlanych. Założyciel firmy, Krzysztof Smolnik –
              inżynier i absolwent Politechniki Gdańskiej – od ponad 20 lat
              realizuje ambitne projekty, dostarczając innowacyjne rozwiązania w
              branży budowlanej.
            </Paragraph>
            <Paragraph>Specjalizujemy się w:</Paragraph>
            <UnorderedList>
              <li>
                <Paragraph>
                  Prowadzeniu inwestycji budowlanych jako Project Manager –
                  kompleksowe wsparcie na każdym etapie realizacji.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Obsłudze i serwisie budynków, zapewniając ich pełną
                  funkcjonalność.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Projektowaniu i wykonawstwie konstrukcji szklanych, które
                  nadają przestrzeni nowoczesny charakter.
                </Paragraph>
              </li>
            </UnorderedList>

            <Paragraph>
              Zachęcamy do pobrania ważnych dokumentów związanych z naszymi
              usługami. Kliknij poniżej, aby uzyskać dostęp do referencji oraz
              potwierdzenia wpisu na wykaz osób upoważnionych do sporządzania
              świadectw charakterystyki energetycznej.
            </Paragraph>

            <ButtonsWrapper>
              <Button
                downloadButton
                downloadFile="List referencyjny Saferoad - K.Smolnik.pdf"
              >
                Pobierz referencje
              </Button>
              <Button
                downloadButton
                downloadFile="Potwierdzenie wpisu ŚCHE 27.02.2025.pdf"
              >
                Pobierz zaświadczenie
              </Button>
            </ButtonsWrapper>
          </Wrapper>
        </ArticleAndPhoto>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default AboutUs;
