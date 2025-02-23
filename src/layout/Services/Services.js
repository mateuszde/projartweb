import ArticleAndPhoto from "../../components/ArticleAndPhoto/ArticleAndPhoto";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Paragraph from "../../components/Paragraph/Paragraph";
import Container from "../../components/Container/Container";

import imageWindow from "../../assets/images/oknobalustrada.jpg";
import imageManagament from "../../assets/images/konstrukcjeSzlane.jpg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";

const Services = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        title="Oferta"
        text="Dzięki kompleksowemu podejściu zapewniamy sprawny przebieg realizacji projektów oraz estetyczne i funkcjonalne rozwiązania architektoniczne. Nasze doświadczenie oraz dbałość o detale gwarantują najwyższą jakość na każdym etapie współpracy."
      >
        <ArticleAndPhoto image={imageWindow}>
          <h3>Prowadzenie inwestycji budowlanych - Project Manager</h3>
          <Paragraph>
            Pełnimy rolę reprezentanta Inwestora na każdym etapie realizacji
            projektu, zapewniając kontrolę nad przebiegiem inwestycji,
            terminowość oraz najwyższą jakość wykonania.
          </Paragraph>
          <Paragraph>Kluczowe zadania:</Paragraph>
          <UnorderedList>
            <li>
              <Paragraph>
                Reprezentacja Inwestora podczas wyboru uczestników procesu
                budowlanego
              </Paragraph>
            </li>
            <li>
              <Paragraph>Kontrola zgodności realizacji inwestycji</Paragraph>
            </li>
            <li>
              <Paragraph>
                Potwierdzanie faktycznie wykonanych robót oraz kontrola
                rozliczeń budowy
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Nadzór nad harmonogramem realizacji inwestycji
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Akceptacja materiałów zaproponowanych przez wykonawcę,
                zweryfikowanych przez nadzór (inżyniera kontraktu) oraz
                projektanta
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Weryfikacja zaawansowania robót i nadzór nad dokumentacją
                powykonawczą
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Wsparcie w procedurze uzyskiwania Pozwolenia na Użytkowanie, aby
                zakończenie inwestycji przebiegło bez komplikacji
              </Paragraph>
            </li>
          </UnorderedList>
        </ArticleAndPhoto>
        <ArticleAndPhoto image={imageManagament} textfirst="true">
          <h3>Projektowanie i wykonawstwo konstrukcji szklanych</h3>
          <Paragraph>
            Tworzymy nowoczesne i eleganckie rozwiązania szklane, które nadają
            przestrzeniom lekkości i prestiżu. Nasze konstrukcje są nie tylko
            estetyczne, ale również funkcjonalne i bezpieczne.
          </Paragraph>
          <Paragraph>Oferujemy:</Paragraph>
          <UnorderedList>
            <li>
              <Paragraph>
                Szklane zadaszenia wejść – nowoczesna ochrona przed warunkami
                atmosferycznymi.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Szklane (bezprofilowe) ścianki działowe - eleganckie podziały
                przestrzeni wewnętrznej.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Szklane drzwi wewnętrzne – przesuwne lub otwierane, idealne do
                gabinetów i łazienek.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Szklane balustrady – dodające lekkości antresolom i schodom.
              </Paragraph>
            </li>
          </UnorderedList>
        </ArticleAndPhoto>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Services;
