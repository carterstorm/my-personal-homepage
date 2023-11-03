import sk_photo from "../../assets/sk_photo.jpg";
import { email } from "../../commonValues";
import { ButtonLinkElement } from "../ButtonLinkElement";
import { ButtonIcon } from "../ButtonLinkElement/styled";
import { Heading } from "../Heading"
import {
    AboutContainer,
    Avatar,
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
            <Heading
                title="Sebastian Komorowski"
            />
            <Summary>
                I have been learning Frontend technology for some time.
                It gives me a lot of satisfaction.
                I know I still have a lot to learn, but i'm really motivated
                and I hope you will help me become a Junior Frontend Developer
                with React and show me good practices how to write better and
                cleaner code 😇
            </Summary>
            <div>
                <ButtonLinkElement
                    href={`mailto:${email}`}
                    title={email}
                    children={<ButtonIcon />}
                    text={"Message me"}
                />
            </div>
        </AboutContainer>
    </Wrapper>
)