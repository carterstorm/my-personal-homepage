import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    #root {
        font-family: 'Inter', sans-serif;
        color: ${({ theme }) => theme.colors.text.primaryTextColor};
        line-height: 1.6;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-top: 25px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-top: 15px;
        };
    };
`;