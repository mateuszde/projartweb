import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, 
    *::after, 
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        letter-spacing: 0.1em;
        /* color: ${({ theme }) => theme.colors.dark}; */
        /* background-color: ${({ theme }) => theme.colors.white}; */
    }

    h1, h2, h3, h4, h5, h6 {
        /* font-family: 'Archivo Black', sans-serif; */
        /* font-family: 'Poppins', sans-serif; */
        /* font-weight: 700; */

    }

`;
