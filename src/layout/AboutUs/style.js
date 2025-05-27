import styled from "styled-components";

export const Wrapper = styled.div`
  /* margin-top: 50px; */
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 40px;

  @media (max-width: 460px) {
    flex-direction: column;
    align-items: center;
  }
`;
