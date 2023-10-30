import { Wrapper } from "../styled";
import { MainInformation } from "./MainInformation";
import { SkillsSection } from "../../common/SkillsSection";
import { currentSkills } from "../../currentSkills";
import { nextSkills } from "../../nextSkills";

export const HomePage = () => (
    <Wrapper>
        <MainInformation />
        <SkillsSection
            title="My skillset ⚒️"
            skills={currentSkills}
        />
        <SkillsSection
            title="What I want to learn next 📚"
            skills={nextSkills}
        />
    </Wrapper>
);

