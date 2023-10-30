import sk_photo from "../../../assets/sk_photo.jpg";
import { email } from "../../../commonValues";
import {
    AboutContainer,
    Avatar,
    ButtonIcon,
    ButtonLink,
    Heading,
    Hi,
    Summary,
    Wrapper
} from "./styled";

export const MainInformation = () => (
    <Wrapper>
        <Avatar
            src={sk_photo}
            alt="Sebastian Komorowski photo"
            title="Sebastian Komorowksi photo"
            draggable={false}
        />
        <AboutContainer>
            <Hi>
                Hi there! 🚀 🤙 😎  I'm a guy who just starting his
                adventure in IT world.<br />
                My name is:
            </Hi>
            <Heading>Sebastian Komorowski</Heading>
            <Summary>
                I have been learning Frontend technology for some time.
                It gives me a lot of satisfaction.
                I know I still have a lot to learn, but i'm really motivated
                and I hope you will help me become a Junior Frontend Developer
                with React and show me good practices how to write better and
                cleaner code 😇
            </Summary>
            <div>
                <ButtonLink
                    draggable={false}
                    href={`mailto:${email}`}
                    title={email}>
                    <ButtonIcon />
                    Message me
                </ButtonLink>
            </div>
        </AboutContainer>
    </Wrapper>
)