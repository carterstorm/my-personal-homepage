import { AboutSection } from "./AboutSection";
import { Education } from "./Education";
import { Future } from "./Future";
import { Introduction } from "./Introduction";

export const AboutMe = () => (
    <>
        <AboutSection
            title={"Introduction"}
            children={<Introduction />}
        />
        <AboutSection
            title={"Experience and education"}
            children={<Education />}
        />
        <AboutSection
            title={"Future"}
            children={<Future />}
        />
    </>
);