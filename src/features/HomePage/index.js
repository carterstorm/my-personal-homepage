import { Wrapper } from "../styled";
import { MainInformation } from "./MainInformation";
import { SkillsSection } from "../../common/SkillsSection";
import { currentSkills } from "../../currentSkills";
import { nextSkills } from "../../nextSkills";
import { futureSkills } from "../../futureSkills";

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
        <SkillsSection
            title="What I want to learn in the further future ⏱️"
            skills={futureSkills}
        />
    </Wrapper>
);

