import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5%;
  padding: 32px 20px;
  margin-bottom: 50px;
`;

export const ImageWrapper = styled.div`
  order: ${({ textfirst }) => (textfirst ? 2 : 1)};
  width: 45%;
  height: 600px;
`;

export const TextWrapper = styled.div`
  order: ${({ textfirst }) => (textfirst ? 1 : 2)};
  width: 45%;
  margin-top: 48px;
  & h3 {
    margin-bottom: 16px;
    text-transform: uppercase;
  }
`;
