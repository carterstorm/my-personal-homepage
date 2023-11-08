import { email } from "../../commonValues";
import { Social } from "./Social";
import {
    Address,
    ContactHeading,
    Email,
    LastSentence,
    Wrapper
} from "./styled";

export const Footer = () => (
    <Wrapper>
        <LastSentence>
            If you are interested in cooperation or want to learn more about my experience,
            please contact me. I will be happy to share additional information.
            Thank you for visiting my website and I invite you to get to know me better!✌️
        </LastSentence>
        <ContactHeading>
            Here is my contact details 🤌
        </ContactHeading>
        <Address>
            <div>
                <Email
                    href={`mailto:${email}`}
                    title={email}
                    draggable={false}
                >
                    {email}
                </Email>
            </div>
        </Address>
        <Social />
    </Wrapper>
);