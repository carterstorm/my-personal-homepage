import { styleIcon } from "./common/Footer/Social/styled";
import { ReactComponent as GitHubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";

export const socialMedia = [
    {
        id: 1,
        socialName: "GitHub",
        Icon: styleIcon(GitHubIcon),
        url: "https://github.com/carterstorm",
    },
    {
        id: 2,
        socialName: "Linkedin",
        Icon: styleIcon(LinkedinIcon),
        url: "https://www.linkedin.com/in/sebastian-komorowski-it/",
    },
];