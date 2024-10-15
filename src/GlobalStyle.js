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
        font-family: 'Onest', sans-serif;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 0.07em;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Onest", sans-serif;
        font-weight: 900;
        /* font-family: 'Archivo Black', sans-serif; */
        /* font-family: 'Poppins', sans-serif; */
        /* font-weight: 700; */

    }

    h1 {
        font-size: 50px;
        margin-bottom: 16px;
    }

    h2 {
        font-size: 30px;
    }

    p {
        /* font-family: "Inter", sans-serif; */
        /* font-family: "Roboto", sans-serif; */
    }

`;
