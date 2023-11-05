import { Heading } from "../../../common/Heading";
import { SectionWrapper } from "../../styled";
import { Article } from "./styled";

export const AboutSection = ({ title, children }) => (
    <>
        <SectionWrapper>
            <Heading
                title={title}
                padding
                as="h2"
            />
            <Article>
                {children}
            </Article>
        </SectionWrapper>
    </>

);