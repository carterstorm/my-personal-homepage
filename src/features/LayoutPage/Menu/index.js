import { NavigationItem, NavigationList, StyledNavLink } from "./styled";
import { toAboutMe, toMyProjects, toSkills } from "../../../routes";


export const Menu = () => (
    <nav>
        <NavigationList>
            <NavigationItem>
                <StyledNavLink activeClassName="active" to={toAboutMe()}>About me</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
                <StyledNavLink activeClassName="active" to={toSkills()}>My skills</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
                <StyledNavLink activeClassName="active" to={toMyProjects()}>My projects</StyledNavLink>
            </NavigationItem>
        </NavigationList>
    </nav>
);