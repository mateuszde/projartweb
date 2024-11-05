import ArticleAndPhoto from "../../components/ArticleAndPhoto/ArticleAndPhoto";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Paragraph from "../../components/Paragraph/Paragraph";
import Container from "../../components/Container/Container";
import { Wrapper } from "./style";

import imageWindow from "../../assets/images/oknobalustrada.jpg";
import imageManagament from "../../assets/images/zp.jpg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";

const Services = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        title="Oferta"
        text="Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd."
      >
        <ArticleAndPhoto image={imageWindow}>
          <h3>Usługa 1</h3>
          <Paragraph>
            Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała
            zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
          </Paragraph>
          <Paragraph>
            Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała
            zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
          </Paragraph>
          <UnorderedList>
            <li>
              <Paragraph>podpunkt</Paragraph>
            </li>
            <li>
              <Paragraph>podpunkt</Paragraph>
            </li>
            <li>
              <Paragraph>podpunkt</Paragraph>
            </li>
          </UnorderedList>
        </ArticleAndPhoto>
        <ArticleAndPhoto image={imageManagament} textfirst="true">
          <h3>Usługa 1</h3>
          <Paragraph>
            Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała
            zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
          </Paragraph>
          <Paragraph>
            Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała
            zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
          </Paragraph>
          <UnorderedList>
            <li>
              <Paragraph>podpunkt</Paragraph>
            </li>
            <li>
              <Paragraph>podpunkt</Paragraph>
            </li>
            <li>
              <Paragraph>podpunkt</Paragraph>
            </li>
          </UnorderedList>
        </ArticleAndPhoto>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Services;
