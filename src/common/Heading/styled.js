import styled from "styled-components";

export const StyledHeading = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondaryTextColor};
    padding: ${({ skillsPadding }) => skillsPadding ? "16px 0" : null};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 28px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletExtraBreakpoint}px) {
        padding: ${({ skillsPadding }) => skillsPadding ? "16px" : null};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 24px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 22px;
    };
`;