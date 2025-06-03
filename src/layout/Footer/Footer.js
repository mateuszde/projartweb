import styled from "styled-components";
import Paragraph from "../../components/Paragraph/Paragraph";

const currentTime = new Date();
const getCurrentYear = () => currentTime.getFullYear();

const FooterWrapper = styled.footer`
  min-height: 100px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

const Wrapper = styled.div`
  max-width: 1400px;
  padding: 40px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CopyrightWrapper = styled.div`
  margin-top: 46px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  & h3 {
    margin-bottom: 30px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <TextWrapper>
          <h3>Dane rejestrowe:</h3>
          <Paragraph light>
            Przedsiębiorstwo Budowlano-Usługowo-Handlowe "Proj-Art" Krzysztof
            Smolnik
          </Paragraph>
          <Paragraph light>ul. Różana 14B</Paragraph>
          <Paragraph light>80-180 Borkowo</Paragraph>
          <Paragraph light>NIP: 584-204-46-73</Paragraph>
        </TextWrapper>
        <CopyrightWrapper>
          P.B.U.H. "Proj-Art" Krzysztof Smolnik © {getCurrentYear()}. Wszelkie
          prawa zastrzeżone.
        </CopyrightWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
