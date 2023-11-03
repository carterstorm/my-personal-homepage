import {
    ProjectDescription,
    ProjectItem,
    ProjectList,
    ProjectName,
    LinksContainer,
    LinkElement,
    Link,
    Wrapper,
} from "./styled";

export const ProjectsSuccess = ({ data }) => (
    <Wrapper>
        <ProjectList >
            {data.map(({
                id,
                description,
                name,
                html_url
            }) => (
                <ProjectItem key={id}>
                    <ProjectName>{name}</ProjectName>
                    <ProjectDescription>{description ? description : "Example text"}</ProjectDescription>
                    <LinksContainer>
                        <LinkElement>
                            <span>Link to repo:</span>
                            <Link
                                href={html_url}
                                target="_blank"
                                title="Link to repo">
                                {html_url}
                            </Link>
                        </LinkElement>
                        <LinkElement>
                            <span>Demo:</span>
                            <Link
                                href={`https://carterstorm.github.io/${name}/`}
                                target="_blank"
                                title="Link to demo">{`https://carterstorm.github.io/${name}/`}
                            </Link>
                        </LinkElement>
                    </LinksContainer>
                </ProjectItem>
            ))}
        </ProjectList>
    </Wrapper>
);