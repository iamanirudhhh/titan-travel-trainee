import colors from "./colors";
import spacing from "./spacing";

const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: "10px",
      fontSize: "20px",
      fontWeight: 700,
      height: "50px",
      minWidth: "100%",
      "@media (min-width: 960px)": {
        minWidth: "160px",
      },
      padding: `${spacing[2]}px`,
      textTransform: "none",
    },
    contained: {
      boxShadow: "none",
      "&:active": {
        boxShadow: "none",
      },
      "&:hover": {
        boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",
      },
      "&.Mui-disabled": {
        borderColor: "rgba(0, 0, 0, 0.12)",
      },
    },
    containedSizeSmall: {
      fontSize: "16px",
      padding: `0 ${spacing[2]}px`,
    },
    containedSizeLarge: {
      fontSize: "16px",
      padding: `${spacing[2]}px`,

      "@media (min-width: 960px)": {
        minWidth: "338px",
      },
    },
    containedPrimary: {
      backgroundColor: colors.palette.secondary,
      "&:hover": {
        backgroundColor: colors.palette.secondary,
      },
    },
    containedSecondary: {
      backgroundColor: colors.palette.secondary,
      color: colors.palette.darkGrey,
      border: 0,
      "&:hover": {
        backgroundColor: colors.palette.secondary,
        boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",

        "@media (hover: none)": {
          backgroundColor: colors.palette.secondary,
        },
      },
    },
    outlinedSizeSmall: {
      fontSize: "20px",
      padding: `${spacing[2]}px`,
    },
    outlinedSizeLarge: {
      fontSize: "20px",
      padding: `0 ${spacing[2]}px`,
      "@media (min-width: 960px)": {
        minWidth: "338px",
      },
    },
    outlinedPrimary: {
      border: `1px solid ${colors.palette.secondary}`,
      padding: `${spacing[2]}px`,
      "&:hover": {
        border: `1px solid ${colors.palette.secondary}`,
        backgroundColor: colors.palette.white,
        boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",
        "@media (hover: none)": {
          backgroundColor: colors.palette.secondary,
        },
      },
    },
    text: {
      border: "none",
      fontWeight: 400,
      padding: `${spacing[2]}px 0`,
    },
    textSizeSmall: {
      fontSize: "20px",
      fontWeight: 400,
      textAlign: "left",
      lineHeight: 1.5,
      padding: 0,
      minWidth: 0,
    },
    textSizeLarge: {
      fontSize: "20px",
      fontWeight: 400,
      textAlign: "left",
      lineHeight: 1.5,
      padding: 0,
      minWidth: 0,
    },
    textPrimary: {
      color: colors.palette.black,
      "&:hover": {
        backgroundColor: colors.palette.basic,
      },
    },
    endIcon: {
      marginLeft: "-4px",
    },
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: "30px",
      },
    },
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: "30px",
      },
    },
  },
};

export default MuiButton;
