import { Heading } from "../../../common/Heading";
import { SectionWrapper } from "../../styled";
import { SkillsList } from "./styled";

export const SkillsSection = ({ title, skills }) => (
    <SectionWrapper>
        <Heading
            title={title}
            padding
            as="h2"
        />
        <SkillsList>
            {skills.map(({ id, skillText }) => (
                <li key={id}>
                    <span>
                        {skillText}
                    </span>
                </li>
            ))}
        </SkillsList>
    </SectionWrapper>
);