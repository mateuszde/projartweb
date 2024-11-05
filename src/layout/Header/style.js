import styled from "styled-components";

export const Wrapper = styled.header`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;

export const ContainerWrapper = styled.div`
  max-width: 650px;
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
  filter: brightness(55%);
`;

export const StyledHeading1 = styled.h1`
  color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;
