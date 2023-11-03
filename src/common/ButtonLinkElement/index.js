import { ButtonLink } from "./styled";

export const ButtonLinkElement = ({ children, text, title, href }) => (
    <ButtonLink
        draggable={false}
        href={href}
        title={title}
        target="_blank"
    >
        {children}
        {text}
    </ButtonLink>
);