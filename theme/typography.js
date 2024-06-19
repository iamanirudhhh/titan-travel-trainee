import colors from "./colors";
const fontFamily = "'Montserrat'";

const typography = {
  htmlFontSize: 16,
  fontFamily,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily,
    fontSize: "44px",
    fontWeight: 700,
    lineHeight: "52px",
    color: colors.palette.black,
  },
  h2: {
    fontFamily,
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "42px",
    color: colors.palette.black,
  },
  h3: {
    fontFamily,
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "32px",
    color: colors.palette.black,
  },
  h4: {
    fontFamily,
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    color: colors.palette.black,
  },
  h5: {
    fontFamily,
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.334,
    color: colors.palette.black,
  },
  h6: {
    fontFamily,
    fontWeight: 400,
    fontSize: "1.25rem",
    lineHeight: 1.6,
    color: colors.palette.black,
  },
  subtitle1: {
    fontFamily,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: colors.palette.black,
  },
  subtitle2: {
    fontFamily,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.57,
    color: colors.palette.black,
  },
  body1: {
    fontFamily,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    color: colors.palette.black,
  },
  body2: {
    fontFamily,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    color: colors.palette.black,
  },
  button: {
    fontFamily,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.75,
  },
  caption: {
    fontFamily,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  overline: {
    fontFamily,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 2.66,
    textTransform: "uppercase",
  },
  mainHeading:{
    fontSize: "2.5rem",
    color: "white",
    fontWeight: "bold",
    maxWidth:"400px",
    textAlign: "center",
  }
};

export default typography;
