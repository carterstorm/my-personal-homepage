import {
    AboutContainer,
    Avatar,
    ButtonLink,
    Heading,
    Hi,
    Summary,
    Wrapper
} from "./styled";

export const MainInformation = () => (
    <Wrapper>
        <Avatar />
        <AboutContainer>
            <Hi></Hi>
            <Heading />
            <Summary></Summary>
            <ButtonLink>
                Message me
            </ButtonLink>
        </AboutContainer>
    </Wrapper>
)