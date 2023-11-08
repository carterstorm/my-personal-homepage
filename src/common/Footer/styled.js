import styled from "styled-components";

export const Wrapper = styled.footer`
    padding: 60px 0 40px;
    display: grid;
    justify-items: end;
    grid-gap: 15px;
`;

export const LastSentence = styled.p`
    margin: 0;
    font-size: 14px;
    max-width: 600px;
    font-style: italic;
    text-align: justify;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
        max-width: 500px;
    };
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
        color: ${({ theme }) => theme.colors.footerLinksColorHover}
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 14px;
    };
`;

