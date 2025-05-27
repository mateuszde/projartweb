import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5%;
  padding: 32px 20px;
  margin: 50px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  order: ${({ textfirst }) => (textfirst ? 2 : 1)};
  width: 45%;

  @media (max-width: 1024px) {
    width: 70%;
    order: 1;
    margin-bottom: 82px;
    margin-top: -32px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TextWrapper = styled.div`
  order: ${({ textfirst }) => (textfirst ? 1 : 2)};
  width: 45%;

  & h3 {
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    width: 90%;
    order: 2;
  }
`;
