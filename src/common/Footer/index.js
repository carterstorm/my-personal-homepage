import { email } from "../../commonValues";
import {
    Address,
    ContactHeading,
    Email,
    Wrapper
} from "./styled";

export const Footer = () => (
    <Wrapper>
        <ContactHeading>
            Here is my contact details
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
    </Wrapper>
);