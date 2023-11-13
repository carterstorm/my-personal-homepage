import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px 0 0;
`;

export const ProjectList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(350px, 1fr);
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 575px;
        grid-auto-rows: minmax(300px, 1fr);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileExtraBreakpoint}px) {
        grid-template-columns: 1fr;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        grid-gap: 20px;
        grid-auto-rows: minmax(250px, 1fr);
    };
`;

export const ProjectItem = styled.li`
    padding: 35px;
    background-color: ${({ theme }) => theme.colors.tileColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 25px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        padding: 15px;
    };
`;

export const ProjectName = styled.h4`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.colors.footerLinksColorHover};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 20px;
        line-height: 1.4;
    };
`;

export const ProjectDescription = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    text-align: justify;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const LinksContainer = styled.div`
    font-size: 14px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        display: flex;
        justify-content: space-evenly;
    };
`;

export const LinkElement = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    margin: 10px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        display: none;
    };
`;

export const LinkSpan = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.text.primaryTextColor};
    transition: .3s;

    &:hover {
        color: ${({ theme }) => theme.colors.footerLinksColorHover};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;