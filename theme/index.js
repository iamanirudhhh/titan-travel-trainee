import { createTheme } from "@mui/material";
import MuiButton from "./button";
import breakpoints from "./breakpoints";
import colors from "./colors";
import MuiDivider from "./divider";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import MuiSwitch from "./switch";
import MuiBudge from "./budge";
import MuiContainer from "./container";
import MuiTextField from "./textField";

const overrides = {
  breakpoints,
  colors,
  components: {
    MuiContainer,
    MuiButton,
    MuiTextField,
    MuiDivider,
    MuiSwitch,
    MuiBudge,
  },
  palette,
  typography,
  spacing,
};

const theme = createTheme(overrides);

export default theme;
