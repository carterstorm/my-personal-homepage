import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../assets/error.svg";

export const Error = styled(ErrorIcon)`
`;

export const ProjectErrorHeading = styled.h4`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin: 0;
`;

export const ProjectErrorText = styled.span`
    text-align: center;
    line-height: 1.5;
`;