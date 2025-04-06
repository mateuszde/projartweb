import styled from "styled-components";
import Container from "../../components/Container/Container";

const currentTime = new Date();
const getCurrentYear = () => currentTime.getFullYear();

const FooterWrapper = styled.footer`
  min-height: 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        Przedsiębiorstwo Budowlano-Usługowo-Handlowe "Proj-Art" Krzysztof
        Smolnik © {getCurrentYear()}. Wszelkie prawa zastrzeżone.
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
