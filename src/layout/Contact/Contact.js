import Container from "../../components/Container/Container";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";

const Contact = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        id="kontakt"
        title="Kontakt"
        text="Masz pytania lub potrzebujesz dodatkowych informacji? Skontaktuj się z nami, a odpowiemy na wszelkie wątpliwości!"
      >
        telefon email adres ikony dane
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Contact;
