import { StyledHeading } from "./styled";

export const Heading = ({ title, skillsPadding, as }) => (
    <StyledHeading
        skillsPadding={skillsPadding}
        as={as}
    >
        {title}
    </StyledHeading>
);