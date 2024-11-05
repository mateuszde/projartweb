import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 300px;
  min-height: 220px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  & h3 {
    text-transform: uppercase;
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.colors.black};
`;
