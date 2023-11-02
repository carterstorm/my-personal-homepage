const colorsName = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    silverShadow: "#BBBBBB",
    scienceBlue: "#0366D6",
    white: "#FFFFFF",
    black: "#000000",
    whiteLilac: "#FBFBFE",
    iron: "rgba(209, 213, 218, 0.3)",
};

const common = {
    borderRadius: 10,
    boxShadow: `5px 5px 20px ${colorsName.silverShadow}`,
    boxShadowColor: colorsName.silverShadow,
    breakpoints: {
        mobileSmall: 480,
        mobileExtraBreakpoint: 610,
        mobileMax: 767,
        tabletExtraBreakpoint: 920,
        tabletVerticalMax: 976,
        tabletHorizontalMax: 1199,
    },
};

export const themeLight = {
    ...common,
    colors: {
        backgroundColor: colorsName.whiteLilac,
        horizontalLine: colorsName.iron,
        listItemCircle: colorsName.scienceBlue,
        footerLinksColorHover: colorsName.scienceBlue,
        text: {
            primaryTextColor: colorsName.slateGray,
            secondaryTextColor: colorsName.mineShaft,
            navigationActiveColor: colorsName.scienceBlue,
        },
        button: {
            background: colorsName.scienceBlue,
            textColor: colorsName.white,
            borderColor: colorsName.black,
        },
    },
};