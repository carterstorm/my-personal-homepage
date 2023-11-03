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
    letter-spacing: 0.9px;
`;

export const LinksContainer = styled.div`
    font-size: 14px;
`;

export const LinkElement = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    margin: 10px 0;
`;

export const Link = styled.a`
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text.primaryTextColor};
    transition: .3s;

    &:hover {
        color: ${({ theme }) => theme.colors.footerLinksColorHover};
    };
`;