import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 60px;
    padding: 0 32px 0;
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius}px;

    @media(max-width: 920px) {
        padding: 0 0;
    };
`;

export const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px 36px;
    margin: 0;
    padding: 32px 0;
    font-size: 14px;
    border-top: 1px solid ${({ theme }) => theme.colors.horizontalLine};
    list-style-position: inside;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletExtraBreakpoint}px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 16px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileExtraBreakpoint}px) {
        grid-template-columns: repeat(1, 1fr);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
        grid-gap: 8px;
    };
`;