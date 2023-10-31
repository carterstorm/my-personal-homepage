import { Heading } from "../../../common/Heading";
import { SkillsList, Wrapper } from "./styled";

export const SkillsSection = ({ title, skills }) => (
    <Wrapper>
        <Heading
            title={title}
            skillsPadding
            as="h2"
        />
        <SkillsList>
            {skills.map(({ id, skillText }) => (
                <li key={id}>
                    <span>
                        {skillText}
                    </span>
                </li>
            ))}
        </SkillsList>
    </Wrapper>
);