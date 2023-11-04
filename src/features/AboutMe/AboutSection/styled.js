import styled from "styled-components";

export const Article = styled.article`
    padding: 32px 0;
    font-size: 14px;
    border-top: 1px solid ${({ theme }) => theme.colors.horizontalLine};
`;

export const Paragraph = styled.p`
    line-height: 1.5;
    margin: 10px 0;
    text-indent: 20px;
    text-align: justify;
`;