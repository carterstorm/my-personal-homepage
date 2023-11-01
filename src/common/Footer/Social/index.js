import { socialMedia } from "../../../socialMedia";
import { SocialItem, SocialLink, SocialList } from "./styled";

export const Social = () => (
    <SocialList>
        {socialMedia.map(({ id, socialName, Icon, url }) => (
            <SocialItem key={id}>
                <SocialLink
                    href={url}
                    title={socialName}
                    target="_blank"
                >
                    <Icon />
                </SocialLink>
            </SocialItem>
        ))}
    </SocialList>
);