import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 60px;
    padding: 0 32px 32px;
    background-color: #fff;
`;

export const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px auto;
    margin: 0;
    padding: 32px 0;
    font-size: 14px;
    border-top: 1px solid ${({ theme }) => theme.colors.horizontalLine};
    list-style-position: inside;
    list-style: none;
`;

export const SkillItem = styled.li`
    ::before {
        content: "👉";
        margin-right: 16px;
        font-size: 20px;
    };
`;

export const SkillText = styled.span`
`;