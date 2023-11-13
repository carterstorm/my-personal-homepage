import { ButtonLink } from "./styled";

export const ButtonLinkElement = ({ children, text, title, href, tileLink }) => (
    <ButtonLink
        draggable={false}
        href={href}
        title={title}
        target="_blank"
        tileLink={tileLink}
    >
        {children}
        {text}
    </ButtonLink>
);