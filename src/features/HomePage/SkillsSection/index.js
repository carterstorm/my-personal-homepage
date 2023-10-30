import { Heading } from "../../../common/Heading";
import { currentSkills } from "../../../currentSkills";
import { SkillItem, SkillsList, Wrapper } from "./styled";

export const SkillsSection = () => (
    <Wrapper>
        <Heading
            title="My skills"
            skillsPadding
            as="h2"
        />
        <SkillsList>
            {currentSkills.map(({ id, skillText }) => (
                <SkillItem key={id}>
                    <span>
                        {skillText}
                    </span>
                </SkillItem>
            ))}
        </SkillsList>
    </Wrapper>
);