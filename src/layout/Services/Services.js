import ArticleAndPhoto from "../../components/ArticleAndPhoto/ArticleAndPhoto";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Paragraph from "../../components/Paragraph/Paragraph";
import Container from "../../components/Container/Container";

import imageWindow from "../../assets/images/Zespol2.jpg";
import pmImage from "../../assets/images/pm.jpg";
import glassImage from "../../assets/images/Balustrady.jpg";
import swiadectewo from "../../assets/images/sche.jpg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";

const Services = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        id="oferta"
        title="Oferta"
        text="Dzięki kompleksowemu podejściu zapewniamy sprawny przebieg realizacji projektów oraz estetyczne i funkcjonalne rozwiązania architektoniczne. Nasze doświadczenie oraz dbałość o detale gwarantują najwyższą jakość na każdym etapie współpracy."
      >
        <ArticleAndPhoto image={pmImage} altText="Project Manager">
          <h3>
            Prowadzenie inwestycji budowlanych w ramach funkcji Inwestora
            zastępczego lub Project Managera
          </h3>
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
              <Paragraph>
                Kontrola zgodności realizacji inwestycji i jakości prac
                budowlanych
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Nadzór inwestorski nad wszystkimi branżami, zgodnie z przepisami
                ustawy Prawo budowlane i innymi obowiązującymi przepisami
              </Paragraph>
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
                Akceptacja podwykonawców i zaproponowanych przez nich
                materiałów, weryfikacja rozliczeń z GW w ramach solidarnej
                odpowiedzialności
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
                Wsparcie w procedurze uzyskania odbioru końcowego i Pozwolenia
                na Użytkowanie (PnU)
              </Paragraph>
            </li>
          </UnorderedList>
        </ArticleAndPhoto>
        <ArticleAndPhoto
          image={glassImage}
          textfirst="true"
          altText="Balustrady szklane"
        >
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
          <Paragraph>
            Wszystkie rozwiązania projektowane są indywidualnie pod każdą
            realizację.
          </Paragraph>
          <Paragraph>
            W ramach wykonawstwa i montażu dostarczamy kompletną
            dokumentację/projekt instalowanych produktów.
          </Paragraph>
        </ArticleAndPhoto>
        <ArticleAndPhoto
          image={imageWindow}
          altText="Zdjęcie przedstawiające zespół firmy"
        >
          <h3>
            Doradztwo oraz niezależne opinie techniczne w zakresie stolarki
            okiennej i drzwiowej
          </h3>
          <Paragraph>
            Stolarka budowlana spełnia obecnie bardzo istotną rolę w
            nowoczesnych budynkach i z tego powodu poddawana jest szeregom
            wymagań zawartych w specyfikacjach technicznych.
          </Paragraph>
          <Paragraph>
            W ramach naszych usług oferujemy następujące usługi, związane z
            określeniem właściwości stolarki:
          </Paragraph>
          <UnorderedList>
            <li>
              <Paragraph>
                analiza i weryfikacja obliczeń cieplnych stolarki – wsp.
                przenikania ciepła Uw, Ud.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                obliczenia statyczne konstrukcji i odporność na obciążenie
                wiatrem (klasyfikacja),
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                dobór rozwiązań związanych z izolacja akustyczną,
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                dobór rozwiązań związanych z bezpieczeństwem użytkowania
                konstrukcji,
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                indywidualna analiza projektu budowlanego i dobór rozwiązań
                zapewniających wymaganą funkcjonalność,
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                opinie techniczne i ekspertyzy zamontowanej stolarki,
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                mediacje przedsądowe, w celu rozwiązania sporów pomiędzy
                inwestorem (zamawiającym) a wykonawcą / producentem / firmą
                montażową stolarki.
              </Paragraph>
            </li>
          </UnorderedList>
        </ArticleAndPhoto>
        <ArticleAndPhoto
          image={swiadectewo}
          textfirst="true"
          altText="Przykładowe świadectwo charakterystyki energetycznej budynku"
        >
          <h3>Świadectwa charakterystyki energetycznej budynków</h3>
          <Paragraph>
            Świadectwo charakterystyki energetycznej budynków to dokument, który
            określa zapotrzebowanie budynku na nieodnawialną energię pierwotną
            Ep i zgodnie z nowelizacją ustawy o charakterystyce energetycznej
            budynków  oraz zmianach w ustawie prawo budowlane (Dz.U.2023.682) od
            dnia 28 kwietnia 2023r. jest obligatoryjnym dokumentem gdy:
          </Paragraph>
          <UnorderedList>
            <li>
              <Paragraph>
                zakończona zostaje budowa i składane jest do urzędu
                zawiadomienie o zakończeniu budowy obiektu budowlanego lub
                wniosek o udzielenie pozwolenia na użytkowanie,
              </Paragraph>
            </li>
            <li>
              <Paragraph>budynek, część budynku lub lokal będzie:</Paragraph>
              <UnorderedList>
                <li>
                  <Paragraph>zbywany na podstawie umowy sprzedaży,</Paragraph>
                </li>
                <li>
                  <Paragraph>
                    zbywany na podstawie umowy sprzedaży spółdzielczego
                    własnościowego prawa do lokalu,
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>wynajęty.</Paragraph>
                </li>
              </UnorderedList>
            </li>
          </UnorderedList>
          <Paragraph>
            Szczegółowe informacje na temat świadectw charakterystyki
            energetycznej budynków dostępne są na stronie Ministerstwa Rozwoju i
            Technologii.
          </Paragraph>

          <Paragraph>
            Nasza oferta obejmuje kompleksowe opracowanie świadectw oraz audytu
            energetycznego dla wszystkich rodzajów budynków.
          </Paragraph>
          <Paragraph>
            Obliczenia są wykonywane indywidualnie w oparciu o przekazane dane
            projektowe, indywidualny wywiad, wizję lokalną i inwentaryzację
            obiektu.
          </Paragraph>
        </ArticleAndPhoto>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Services;
