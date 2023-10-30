import { Wrapper } from "../styled";
import { MainInformation } from "./MainInformation";
import { SkillsSection } from "./SkillsSection";

export const HomePage = () => (
    <Wrapper>
        <MainInformation />
        <SkillsSection />
    </Wrapper>
);