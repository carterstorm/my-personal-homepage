import styled from "styled-components";

export const Wrapper = styled.footer`
    padding: 80px 0 40px;
    display: grid;
    grid-gap: 15px;
`;

export const ContactHeading = styled.h3`
    font-size: 12px;
    font-weight: 700;
    margin: 0;
`;

export const Address = styled.address`
    font-style: unset;
`;

export const Email = styled.a`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.secondaryTextColor};
    text-decoration: none;
    transition: .2s;

    &:hover {
        color: ${({ theme }) => theme.colors.footerLinksColor}
    };
`;