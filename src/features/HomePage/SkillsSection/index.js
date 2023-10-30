import { Heading } from "../../../common/Heading";
import { currentSkills } from "../../../currentSkills";
import { SkillsList, Wrapper } from "./styled";

export const SkillsSection = () => (
    <Wrapper>
        <Heading
            title="My skillset"
            skillsPadding
            as="h2"
        />
        <SkillsList>
            {currentSkills.map(({ id, skillText }) => (
                <li key={id}>
                    <span>
                        {skillText}
                    </span>
                </li>
            ))}
        </SkillsList>
    </Wrapper>
);