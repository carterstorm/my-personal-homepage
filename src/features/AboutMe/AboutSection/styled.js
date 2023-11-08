import styled from "styled-components";

export const Article = styled.article`
    padding: 32px 0;
    font-size: 14px;
    border-top: 1px solid ${({ theme }) => theme.colors.horizontalLine};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletExtraBreakpoint}px) {
        padding: 32px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        padding: 16px;
    };
`;

export const Paragraph = styled.p`
    text-indent: 16px;
    text-align: justify;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;