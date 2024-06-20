import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import styled from "@emotion/styled";
import { Alarm } from "@mui/icons-material";

const SignUp = ({ story }) => {
  story = useStoryblokState(story);

  console.log(story);
  return (
    <Wrapper>
      <Box>
        <Grid container component="main" className="main_grid">
          <Grid item xs={12} sm={12} md={6} square className="signup_container">
            <Box className="form_container">
              {story?.content?.is_maintenance? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Alarm style={{ color: "red", fontSize: "5rem" }} />
                    <Typography
                      variant="h2"
                      sx={{ my: "1rem", textAlign: "center" }}
                    >
                      Website under maintenance
                    </Typography>
                    <Typography sx={{ color: "red", textAlign: "center" }}>
                      Due to technical issues or scheduled maintenance, the
                      login functionality is currently disabled.Please try again
                      later. Thank you for your patience and understanding.
                    </Typography>
                  </Box>
                </>
              ) : (
                <Box>
                  <Image
                    src={story?.content?.logo?.filename}
                    alt="logo"
                    width={100}
                    unoptimized
                    height={100}
                    style={{ width: "11rem", height: "auto" }}
                  />

                  <Typography sx={{ my: "2rem" }}>
                    {story?.content?.signup_heading}
                  </Typography>

                  <TextField
                    variant="outlined"
                    focused
                    label={"Booking reference"}
                    fullWidth
                    sx={{ mb: "1rem" }}
                  />
                  <TextField
                    variant="outlined"
                    focused
                    label={"Lead passenger's last name"}
                    fullWidth
                    sx={{ mb: "1rem" }}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label={"Lead passenger's date of birth"}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>

                  <Button variant="contained" sx={{ my: "1rem" }} fullWidth>
                    {story?.content?.signup_button_label}
                  </Button>

                  <Typography sx={{ mt: "2rem" }}>
                    {story?.content?.signup_subtitle}
                  </Typography>

                  <Typography sx={{ my: "1rem" }}>
                    Please click below if you’re a travel agent.
                  </Typography>

                  <Typography
                    sx={{
                      my: "1rem",
                      textAlign: "center",
                      textDecoration: "underline",
                      color: "#a96f94",
                      cursor: "pointer",
                    }}
                  >
                    I&apos;m a travel agent
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Image
              src={story?.content?.signup_side_img?.filename}
              alt="logo"
              width={100}
              height={100}
              unoptimized
              style={{
                objectFit: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  .main_grid {
    min-height: 100vh;
    overflow: hidden;
    @media only screen and (max-width: 960px) {
      min-height: 0vh;
    }
  }
  .form_container {
    max-width: 480px;
    padding: 3rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      margin: 2rem;
      padding: 0;
    }
  }

  .MuiGrid-container {
    @media only screen and (max-width: 960px) {
      flex-direction: column-reverse;
    }
  }
`;

export async function getStaticProps() {
  let slug = "signup";

  let sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
