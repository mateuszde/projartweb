import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  filter: brightness(70%);
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  overflow: hidden;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(100%);
    transform: scale(1.1);
  }
`;

export const Square = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 15px;
  left: 15px;
  border: 2px solid ${({ theme }) => theme.colors.gold};
`;
