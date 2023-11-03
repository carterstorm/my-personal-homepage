import { ProjectWrapper } from "../styled";
import { ProjectsLoadingText, Spinner } from "./styled";

export const ProjectsLoading = () => (
    <ProjectWrapper>
        <ProjectsLoadingText>Please wait, projects are being loaded...</ProjectsLoadingText>
        <Spinner />
    </ProjectWrapper>
);