import styled from "styled-components";

export const SectionWrapper = styled.section`
    margin-top: 60px;
    padding: 0 32px 0;
    background-color: ${({ theme }) => theme.colors.tileColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius}px;

    @media(max-width: 920px) {
        padding: 0 0;
    };
`;