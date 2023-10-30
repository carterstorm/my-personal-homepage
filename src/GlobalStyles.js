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
        padding-top: 120px;

        @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
            padding-top: 60px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-top: 25px;
        };

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-top: 15px;
        };
    };
`;