import {
    PortfolioHeading,
    PortfolioIcon,
    PortfolioInfo,
    PortfolioText,
    Wrapper
} from "./styled";

export const MyProjects = () => (
    <Wrapper>
        <PortfolioInfo>
            <PortfolioIcon />
            <PortfolioHeading>Portfolio</PortfolioHeading>
            <PortfolioText>My recent projects</PortfolioText>
        </PortfolioInfo>
    </Wrapper>
);