import ArticleAndPhoto from "../../components/ArticleAndPhoto/ArticleAndPhoto";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import { Wrapper } from "./style";

import imageWindow from "../../assets/images/oknobalustrada.jpg";
import imageManagament from "../../assets/images/zp.jpg";

const Services = () => {
  return (
    <Wrapper>
      <TextWithChildrenComponent
        title="Oferta"
        text="Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd."
      >
        <ArticleAndPhoto image={imageWindow} />
        <ArticleAndPhoto image={imageManagament} textFirst />
      </TextWithChildrenComponent>
    </Wrapper>
  );
};

export default Services;
