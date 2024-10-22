import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 70%;
  align-self: center;
  text-align: center;

  & h2,
  h3 {
    text-transform: uppercase;
  }
`;
