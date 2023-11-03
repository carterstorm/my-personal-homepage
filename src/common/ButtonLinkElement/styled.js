import styled from "styled-components";
import { ReactComponent as Envelope } from "../../assets/envelope.svg";

export const ButtonLink = styled.a`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.button.textColor};
    border: 2px solid ${({ theme }) => theme.colors.button.borderColor};
    background-color: ${({ theme }) => theme.colors.button.background};
    border-radius: ${({ theme }) => theme.borderRadius}px;
    padding: 6px 18px;
    font-weight: 700;
    cursor: pointer;
    transition: .2s;
    text-decoration: none;
    user-select: none;

    &:hover {
        filter: brightness(110%);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const ButtonIcon = styled(Envelope)`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.button.textColor};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileSmall}px) {
        width: 20px;
        height: 20px;
    };
`;