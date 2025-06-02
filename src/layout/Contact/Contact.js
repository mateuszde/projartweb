import Container from "../../components/Container/Container";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import ArticleAndPhoto from "../../components/ArticleAndPhoto/ArticleAndPhoto";
import team from "../../assets/images/Zespol3.jpg";

const Contact = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        id="kontakt"
        title="Kontakt"
        text="Masz pytania lub potrzebujesz dodatkowych informacji? Skontaktuj się z nami, a odpowiemy na wszelkie wątpliwości!"
      >
        <ArticleAndPhoto image={team} altText="Zespół" textfirst={true}>
          telefon email adres ikony dane
        </ArticleAndPhoto>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Contact;
