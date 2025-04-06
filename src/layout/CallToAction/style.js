import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

export const ContainerWrapper = styled.div`
  max-width: 1300px;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(60%);
`;

export const StyledHeading2 = styled.h2`
  color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;
