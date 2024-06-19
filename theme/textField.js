import colors from "./colors";

const MuiTextField = {
  styleOverrides: {
    root: {
      "& .MuiInputBase-root": {
        backgroundColor: `${colors.palette.white}`,
        borderColor: `${colors.palette.basic}`,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: `${colors.palette.basic}`,
        },
        "&:hover fieldset": {
          borderColor: `${colors.palette.basic}`,
        },
        "&.Mui-focused fieldset": {
          borderColor: `${colors.palette.basic}`,
        },
      },
    },
  },
};

export default MuiTextField;
