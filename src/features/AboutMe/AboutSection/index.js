import { Heading } from "../../../common/Heading";
import { SectionWrapper } from "../../styled";
import { Article, Paragraph } from "./styled";

export const AboutSection = ({ title }) => (
    <>
        <SectionWrapper>
            <Heading
                title={title}
                padding
                as="h2"
            />
            <Article>
                <Paragraph>
                    Hi! I'm really glad you're here. I would like to warmly welcome you to my website.
                    This is my place where I can share a little more information about myself and
                    my professional experience.
                </Paragraph>
                <Paragraph>
                    To get to know me better, let me tell you about myself. I am a calm person who is really difficult to disturb.
                    One of my strong features is diligence and responsibility for assigned tasks. I always try to get everything right.
                    I try to do my work conscientiously and professionally, which is why I often check my work several times.
                    I am precise and pay attention to the smallest details. Sometimes it can be frustrating,
                    but it is this quality that makes me want to be perfect.
                </Paragraph>
                <Paragraph>
                    I'm the coffee guy. I love coffee and cakes. I love traveling and discovering new places.
                    I'm a big fan of spontaneous weekend trips. I like to spend my free time actively outdoors,
                    riding a bike or hanging out with my closest friends.
                </Paragraph>
            </Article>
        </SectionWrapper>
    </>

);