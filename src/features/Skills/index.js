import { SkillsSection } from "./SkillsSection";
import { currentSkills } from "../../currentSkills";
import { nextSkills } from "../../nextSkills";
import { inProgress } from "../../inProgress";

export const Skills = () => (
    <>
        <SkillsSection
            title="My skillset ⚒️"
            skills={currentSkills}
        />
        <SkillsSection
            title="What I currently learning 📖"
            skills={inProgress}
        />
        <SkillsSection
            title="What I want to learn next 📚"
            skills={nextSkills}
        />
    </>
);