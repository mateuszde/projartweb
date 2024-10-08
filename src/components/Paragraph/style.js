import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: ${({ textcolor }) => (textcolor ? textcolor : "black")};
  margin-bottom: 32px;
`;
