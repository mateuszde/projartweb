import styled from "styled-components";

export const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 5%;
    padding: 48px 20px;
`;

export const ImageWrapper = styled.div`
    order: ${({ textfirst }) => (textfirst ? 2 : 1)};
    width: 45%;
    height: 400px;
`;

export const TextWrapper = styled.div`
    order: ${({ textfirst }) => (textfirst ? 1 : 2)};
    width: 45%;
`;
