import Container from "../../components/Container/Container";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import ArticleAndPhoto from "../../components/ArticleAndPhoto/ArticleAndPhoto";
import styled from "styled-components";
import Line from "../../components/Line/Line";

import team from "../../assets/images/Zespol3.jpg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";

const ContactWrapper = styled.div`
  width: 100%;
  height: 70%;
  padding: 20px;
  /* border: 1px solid ${({ theme }) => theme.colors.gold}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameWrapper = styled.div`
  margin-bottom: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  color: ${({ light, theme }) => (light ? theme.colors.white : "inherit")};
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 0.05em;
  font-weight: 300;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.gold};
`;

const Contact = () => {
  return (
    <Container>
      <TextWithChildrenComponent
        id="kontakt"
        title="Kontakt"
        text="Masz pytania lub potrzebujesz dodatkowych informacji? Skontaktuj się z nami, a odpowiemy na wszelkie wątpliwości!"
      >
        <ArticleAndPhoto image={team} altText="Zespół" textfirst={true}>
          <ContactWrapper>
            <NameWrapper>
              <h3>Krzysztof Smolnik</h3>
              <Line big={true} />
            </NameWrapper>
            <ContactItem>
              <IconWrapper>
                <StyledIcon src={phone} alt="Ikona telefonu" />
              </IconWrapper>
              <StyledLink href="tel:+48504112828">+48 504 112 828</StyledLink>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <StyledIcon src={mail} alt="Ikona email" />
              </IconWrapper>
              <StyledLink href="mailto:kontakt@proj-art.pl">
                kontakt@proj-art.pl
              </StyledLink>
            </ContactItem>
          </ContactWrapper>
        </ArticleAndPhoto>
      </TextWithChildrenComponent>
    </Container>
  );
};

export default Contact;
