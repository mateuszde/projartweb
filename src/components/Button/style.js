import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  background: #000000;
  color: #ffffff;
  border-radius: 48px;
  padding: 12px 18px;
  /* font-size: 18px; */
  /* font-weight: 700; */
  font-weight: bold;
  line-height: 1;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: black;
  }
`;
