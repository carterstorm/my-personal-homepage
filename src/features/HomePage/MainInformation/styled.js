import styled from "styled-components";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 60px;
    align-items: center;
    margin: 0 auto;
    padding: 0 50px;
    max-width: 1200px;
`;

export const AboutContainer = styled.div`
    display: grid;
    grid-gap: 15px;
`;

export const Avatar = styled.img`
    object-fit: cover;
    width: 24vw;
    height: 24vw;
    border-radius: 50%;
    box-shadow: 5px 10px 40px ${({ theme }) => theme.colors.avatar.boxShadow};
    user-select: none;
`;

export const Hi = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;
`;

export const Heading = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondaryTextColor};
`;

export const Summary = styled(Hi)`
    width: 575px;
`;

export const ButtonLink = styled.a`
    width: 175px;
    text-align: center;
    color: ${({ theme }) => theme.colors.button.textColor};
    background-color: ${({ theme }) => theme.colors.button.background};
    padding: 10px 24px;
    font-weight: 700;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.button.borderColor};
    cursor: pointer;
    transition: .2s;
    text-decoration: none;
    user-select: none;

    &:hover {
        filter: brightness(110%);
    };
`;