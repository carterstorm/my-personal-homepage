import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    #root {
        font-family: 'Inter', sans-serif;
        padding-top: 120px;
    };
`;