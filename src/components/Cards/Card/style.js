import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 280px;
  min-height: 220px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  transition: 0.4s ease-in-out;
  border: 2px solid #f2f2f2;

  & h3 {
    text-transform: uppercase;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.gold};
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gold};
    position: absolute;
    top: 65px;
    right: -20px;
  }
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  font-size: 45px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
