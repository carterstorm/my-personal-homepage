import { AboutSection } from "./AboutSection";
import { Introduction } from "./Introduction";

export const AboutMe = () => (
    <>
        <AboutSection
            title={"Introduction"}
            children={<Introduction />}
        />
        <AboutSection
            title={"Experience and education"}
        />
    </>


);