import { ButtonLinkElement } from "../../../common/ButtonLinkElement";
import {
    ProjectDescription,
    ProjectItem,
    ProjectList,
    ProjectName,
    LinksContainer,
    LinkElement,
    Link,
    Wrapper,
    LinkSpan,
} from "./styled";

export const ProjectsSuccess = ({ data }) => (
    <Wrapper>
        <ProjectList >
            {data.map(({ id, description, name, html_url, homepage }) => {
                if (name === "carterstorm") {
                    return null;
                } else {
                    return (
                        <ProjectItem key={id}>
                            <ProjectName>{name}</ProjectName>
                            <ProjectDescription>
                                {description ?
                                    description :
                                    `There is no text for this project 🧐 Probably, this project is in progress.
                                    As soon as the project is completed, its description will appear here 😇`}
                            </ProjectDescription>
                            <LinksContainer>
                                <LinkElement>
                                    <LinkSpan>Link to repo:</LinkSpan>
                                    <Link
                                        href={html_url}
                                        target="_blank"
                                        title={`Link to repo: ${name}`}>
                                        {html_url}
                                    </Link>
                                </LinkElement>
                                <ButtonLinkElement
                                    tileLink
                                    href={html_url}
                                    title={`Link to repo: ${name}`}
                                    text={"Link to repository"}
                                />
                                {homepage ? (
                                    <>
                                        <ButtonLinkElement
                                            tileLink
                                            href={homepage}
                                            title={`Link to demo: ${name}`}
                                            text={"Link to demo"}
                                        />
                                        <LinkElement>
                                            <LinkSpan>Link to demo:</LinkSpan>
                                            <Link
                                                href={homepage}
                                                target="_blank"
                                                title={`Link to demo: ${name}`}>
                                                {homepage}
                                            </Link>
                                        </LinkElement>
                                    </>
                                ) : null}
                            </LinksContainer>
                        </ProjectItem>
                    )
                }
            })}
        </ProjectList>
    </Wrapper>
);