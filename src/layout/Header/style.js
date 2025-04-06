import styled from "styled-components";

export const Wrapper = styled.header`
  min-height: 75vh;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ContainerWrapper = styled.div`
  max-width: 900px;
  margin-top: 80px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-50px);
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(30%);
`;

export const StyledHeading1 = styled.h1`
  color: white;
  text-transform: uppercase;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;
