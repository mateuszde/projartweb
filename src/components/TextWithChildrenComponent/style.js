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
  max-width: 55%;
  align-self: center;
  text-align: center;
  /* & h2 {
    position: relative;
    text-transform: uppercase;

    ::after {
      display: block;
      content: " ";
      width: 80px;
      height: 20px;
      background: black;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  } */
`;

export const Title = styled.h2`
  position: relative;
  text-transform: uppercase;

  &::after {
    content: "";
    width: 70px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gold};
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
