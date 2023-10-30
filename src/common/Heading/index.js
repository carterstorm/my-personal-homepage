import { StyledHeading } from "./styled";

export const Heading = ({ title, skillsPadding }) => (
    <StyledHeading skillsPadding={skillsPadding}>
        {title}
    </StyledHeading>
);