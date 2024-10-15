import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import { Wrapper } from "./style";
const Services = () => {
  return (
    <Wrapper>
      <TextWithChildrenComponent
        title="Oferta"
        text="Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów,"
      >
        dziecko
      </TextWithChildrenComponent>
    </Wrapper>
  );
};

export default Services;
