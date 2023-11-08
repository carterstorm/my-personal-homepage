import styled from "styled-components";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 60px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
        justify-items: center;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-gap: 30px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        grid-gap: 20px;
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
    box-shadow: ${({ theme }) => theme.boxShadow};
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
    text-align: justify;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const Summary = styled(Hi)`
    max-width: 575px;
`;