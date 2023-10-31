import { SkillsSection } from "./SkillsSection";
import { currentSkills } from "../../currentSkills";
import { nextSkills } from "../../nextSkills";
import { futureSkills } from "../../futureSkills";

export const Skills = () => (
    <>
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
    </>
);