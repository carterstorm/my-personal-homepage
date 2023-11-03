import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../assets/error.svg";

export const Error = styled(ErrorIcon)`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 30px;
    };
`;

export const ProjectErrorHeading = styled.h4`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 14px;
    };
`;

export const ProjectErrorText = styled.span`
    text-align: center;
    line-height: 1.5;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 14px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        font-size: 10px;
    };
`;