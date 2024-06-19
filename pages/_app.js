import "@/styles/globals.css";
import CustomThemeProvider from "@/theme/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: "62AooACV6DrEGF2aMYfKbQtt",
  use: [apiPlugin]
});

export default function App({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <CssBaseline/>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
