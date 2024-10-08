import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: lightgray;
  /* height: 300px; */
  min-height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
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
  filter: brightness(45%);
`;

export const StyledHeading1 = styled.h1`
  color: white;
`;

export const ShapeDividerBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  & svg {
    position: relative;
    display: block;
    width: calc(114% + 1.3px);
    height: 147px;
  }

  & path {
    fill: #ffffff;
  }
`;
