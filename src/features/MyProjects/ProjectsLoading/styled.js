import styled from "styled-components";
import { ReactComponent as SpinnerIcon } from "../../../assets/spinner.svg";

export const ProjectsLoadingText = styled.span`
    margin-bottom: 30px;
    font-size: 14px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        margin-bottom: 10px;
        font-size: 10px;
    };
`;

export const Spinner = styled(SpinnerIcon)`
    color: ${({ theme }) => theme.colors.footerLinksColorHover};
    animation: spin;
    animation-duration: .75s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        };
         to {
            transform: rotate(360deg);
        };
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        width: 100px;
        height: 100px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 60px;
        height: 60px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        width: 40px;
        height: 40px;
    };
`;