import styled from "styled-components";
import { ReactComponent as SpinnerIcon } from "../../../assets/spinner.svg";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0 0;
`;

export const ProjectsLoadingText = styled.span`
    margin-bottom: 30px;
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
`;