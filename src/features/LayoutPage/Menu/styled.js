import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationList = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin: 30px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        justify-content: center;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 10px 0;
    };
`;

export const NavigationItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 40px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;

    &:not(:last-child) {
        margin-right: 10px;
    };

    &:last-child {
        padding-right: 0;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        &:not(:last-child) {
            margin-right: 0px;
        };

        &:first-child {
            padding-left: 0;
        };
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    };
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.text.primaryTextColor};
    text-decoration: none;

    &.active {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.text.navigationActiveColor};
    }
`;