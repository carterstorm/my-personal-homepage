const colorsName = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    silverShadow: "#BBBBBB",
    scienceBlue: "#0366D6",
    white: "#FFFFFF",
    black: "#000000",
    whiteLilac: "#FBFBFE",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 976,
        tabletHorizontalMax: 1199,
    },
};

export const themeLight = {
    ...common,
    colors: {
        backgroundColor: colorsName.whiteLilac,
        text: {
            primaryTextColor: colorsName.slateGray,
            secondaryTextColor: colorsName.mineShaft,
        },
        avatar: {
            boxShadow: colorsName.silverShadow,
        },
        button: {
            background: colorsName.scienceBlue,
            textColor: colorsName.white,
            borderColor: colorsName.black,
        },
    },
};