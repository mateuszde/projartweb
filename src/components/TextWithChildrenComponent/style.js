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
  max-width: 60%;
  align-self: center;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  position: relative;
  text-transform: uppercase;

  &::after {
    content: "";
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gold};
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
