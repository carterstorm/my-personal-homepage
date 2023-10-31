import styled from "styled-components";

export const PaddingWrapper = styled.div`
    padding: 0 30px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 20px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        padding: 0 15px;
    };
`;