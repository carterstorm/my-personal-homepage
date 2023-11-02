import { useGitHubData } from "../../useGitHubData";
import { ProjectsLoading } from "./ProjectsLoading";
import { ProjectsError } from "./ProjectsError";
import { ProjectsSuccess } from "./ProjectsSuccess";
import {
    PortfolioHeading,
    PortfolioIcon,
    PortfolioInfo,
    PortfolioText,
    Wrapper
} from "./styled";

export const MyProjects = () => {
    const gitHubData = useGitHubData(2);

    return (
        <Wrapper>
            <PortfolioInfo>
                <PortfolioIcon />
                <PortfolioHeading>Portfolio</PortfolioHeading>
                <PortfolioText>My recent projects</PortfolioText>
            </PortfolioInfo>
            {
                gitHubData.state === "loading" ?
                    (<ProjectsLoading />)
                    :
                    gitHubData.state === "error" ?
                        (<ProjectsError />)
                        :
                        (<ProjectsSuccess
                            gitHubData={gitHubData}
                        />)
            }
        </Wrapper>
    );
};