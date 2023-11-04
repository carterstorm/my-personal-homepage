import { StyledHeading } from "./styled";

export const Heading = ({ title, padding, as }) => (
    <StyledHeading
        padding={padding}
        as={as}
    >
        {title}
    </StyledHeading>
);