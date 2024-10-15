import styled from "styled-components";

export const Divider = styled.div`
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
    fill: ${({ theme }) => theme.colors.white};
  }
`;
