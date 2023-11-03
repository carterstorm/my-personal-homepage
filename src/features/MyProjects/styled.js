import styled from "styled-components";
import { ReactComponent as MarkGitHub } from "../../assets/mark-github.svg";

export const Wrapper = styled.section`
    padding: 30px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 60px 0;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        padding: 40px 0 30px;
    };
`;

export const PortfolioInfo = styled.header`
    display: grid;
    grid-gap: 12px;
    justify-content: center;
    justify-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        grid-gap: 8px;
    };
`;

export const PortfolioIcon = styled(MarkGitHub)`
    color: ${({ theme }) => theme.colors.portfolioIconColor};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        width: 30px;
        height: 30px;
    };
`;

export const PortfolioHeading = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondaryTextColor};
    font-size: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 14px;
    };
`;

export const PortfolioText = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 10px;
    };
`;

export const ProjectWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0 0;
`;