import styled from "styled-components";
import { ReactComponent as Envelope } from "../../../assets/envelope.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 60px;
    align-items: center;
    margin: 0 auto;
    padding: 0 50px;
    max-width: 1200px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
        justify-items: center;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-gap: 30px;
        padding: 0 25px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        grid-gap: 20px;
        padding: 0 15px;
    };
`;

export const AboutContainer = styled.div`
    display: grid;
    grid-gap: 15px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        grid-gap: 10px;
    };
`;

export const Avatar = styled.img`
    object-fit: cover;
    width: 26vw;
    height: 26vw;
    min-width: 360px;
    min-height: 360px;
    border-radius: 50%;
    box-shadow: 5px 10px 40px ${({ theme }) => theme.colors.avatar.boxShadow};
    user-select: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        min-width: 260px;
        min-height: 260px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        min-width: 220px;
        min-height: 220px;
    };
`;

export const Hi = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 12px;
    };
`;

export const Summary = styled(Hi)`
    max-width: 575px;
`;

export const ButtonLink = styled.a`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.button.textColor};
    border: 2px solid ${({ theme }) => theme.colors.button.borderColor};
    background-color: ${({ theme }) => theme.colors.button.background};
    border-radius: 5px;
    padding: 6px 18px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s;
    text-decoration: none;
    user-select: none;

    &:hover {
        filter: brightness(110%);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const ButtonIcon = styled(Envelope)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.button.textColor};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        width: 20px;
        height: 20px;
    };
`;