import styled from "styled-components";

export const SocialList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const SocialItem = styled.li`
    &:not(:last-child) {
        margin-right: 4px;
    };
`;

export const SocialLink = styled.a`
    color: ${({ theme }) => theme.colors.text.secondaryTextColor};
    transition: .2s;

    &:hover {
        color: ${({ theme }) => theme.colors.footerLinksColor};
    };
`;

export const styleIcon = Icon => styled(Icon)`
    height: 40px;
`;