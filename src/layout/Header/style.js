import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const Wrapper = styled.header`
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }
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

  @media (max-width: 768px) {
    width: 90%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -100px);
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(46%);
`;

export const StyledHeading1 = styled.h1`
  color: white;
  text-transform: uppercase;

  @media (max-width: 550px) {
    font-size: 36px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;
