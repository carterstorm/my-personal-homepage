import { ButtonLinkElement } from "../../../common/ButtonLinkElement";
import { gitHubAccount } from "../../../commonValues";
import { ProjectWrapper } from "../styled";
import { Error, ProjectErrorHeading, ProjectErrorText } from "./styled";

export const ProjectsError = () => (
    <ProjectWrapper>
        <Error />
        <ProjectErrorHeading>Ooops! Something went wrong... </ProjectErrorHeading>
        <ProjectErrorText>
            Failed to load Github projects.<br />
            You can check them directly on my Github account 😊
        </ProjectErrorText>
        <ButtonLinkElement
            href={gitHubAccount}
            title={"My gitHub account"}
            text={"Go to my Github"}
        />
    </ProjectWrapper>
);