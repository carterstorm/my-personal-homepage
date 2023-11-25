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
                Hi there! 🚀 🤙 😎  Nice to see you!<br />
                My name is:
            </Hi>
            <Heading
                title="Sebastian Komorowski"
            />
            <Summary>
                I approach programming with passion and
                enthusiasm, constantly discovering new learning
                opportunities. I am hard-working, creative, and ambitious.
                I believe that the opportunity for growth, self-improvement, and knowledge enhancement
                is the most valuable aspect.
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