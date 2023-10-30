import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 60px;
    padding: 0 32px 0;
    background-color: #fff;
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
`;