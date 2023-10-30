import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 25px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        padding: 0 15px;
    };
`;