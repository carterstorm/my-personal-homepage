import { Heading } from "../../../common/Heading";
import { SectionWrapper } from "../../styled";

export const AboutSection = ({ title }) => (
    <SectionWrapper>
        <Heading
            title={title}
            padding
            as="h2"
        />
    </SectionWrapper>
);