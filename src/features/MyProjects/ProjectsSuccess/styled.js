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
    grid-auto-rows: 300px;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 575px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileExtraBreakpoint}px) {
        grid-template-columns: 1fr;
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
`;

export const ProjectName = styled.h4`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.colors.footerLinksColorHover};
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
`;

export const LinkElement = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    margin: 10px 0;
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