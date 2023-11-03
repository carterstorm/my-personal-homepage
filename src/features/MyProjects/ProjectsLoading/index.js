import { Wrapper, ProjectsLoadingText, Spinner } from "./styled";

export const ProjectsLoading = () => (
    <Wrapper>
        <ProjectsLoadingText>Please wait, projects are being loaded...</ProjectsLoadingText>
        <Spinner />
    </Wrapper>
);