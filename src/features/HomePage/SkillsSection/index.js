import { Heading } from "../../../common/Heading";
import { SkillText, SkillItem, SkillsList, Wrapper } from "./styled";

export const SkillsSection = () => (
    <Wrapper>
        <Heading
            title="My skills"
            skillsPadding
        />
        <SkillsList>
            <SkillItem>
                <SkillText>
                    Example skill
                </SkillText>
            </SkillItem>
            <SkillItem>
                <SkillText>
                    Example skill
                </SkillText>
            </SkillItem>
            <SkillItem>
                <SkillText>
                    Example skill
                </SkillText>
            </SkillItem>
        </SkillsList>
    </Wrapper>
);