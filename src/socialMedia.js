import { styleIcon } from "./common/Footer/Social/styled";
import { ReactComponent as GitHubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./assets/facebook.svg";

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
        url: "https://www.linkedin.com/",
    },
    {
        id: 3,
        socialName: "Facebook",
        Icon: styleIcon(FacebookIcon),
        url: "https://www.facebook.com/sebastian.komorowski1/",
    },
];