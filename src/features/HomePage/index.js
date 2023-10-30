import { Wrapper } from "../styled";
import { MainInformation } from "./MainInformation";
import { SkillsSection } from "../../common/SkillsSection";
import { currentSkills } from "../../currentSkills";

export const HomePage = () => (
    <Wrapper>
        <MainInformation />
        <SkillsSection
            title="My skillset"
            skills={currentSkills}
        />
    </Wrapper>
);