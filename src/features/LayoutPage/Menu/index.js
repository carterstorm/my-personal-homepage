import { Link } from "react-router-dom";
import { toAboutMe, toMyProjects, toSkills } from "../../../routes";

export const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to={toAboutMe()}>About me</Link>
            </li>
            <li>
                <Link to={toSkills()}>My skills</Link>
            </li>
            <li>
                <Link to={toMyProjects()}>My projects</Link>
            </li>
        </ul>
    </nav>
);