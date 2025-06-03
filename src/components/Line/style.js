import styled from "styled-components";

export const LineWrapper = styled.div`
  height: ${({ size }) => (size ? "3px" : "2px")};
  width: ${({ size }) => (size ? "300px" : "50px")};
  background-color: ${({ theme }) => theme.colors.gold};
  margin-top: -10px;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    width: ${({ size }) => (size ? "100%" : "50px")};
  }
`;
