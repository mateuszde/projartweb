import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;

  @media (max-width: 1300px) {
    justify-content: space-around;
    gap: 40px;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`;
