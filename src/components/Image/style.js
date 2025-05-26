import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  filter: brightness(75%);
  width: 100%;
  height: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(95%);
    transform: scale(1.05);
  }
`;

export const Square = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 15px;
  left: 15px;
  border: 3px solid ${({ theme }) => theme.colors.gold};
`;
