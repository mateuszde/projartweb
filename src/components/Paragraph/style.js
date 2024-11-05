import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: ${({ light, theme }) =>
    light ? theme.colors.white : theme.colors.black};
  margin-bottom: 16px;
`;
