import Image from "next/image";

import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

import { useStoryblokState } from "@storyblok/react";

import { fetchStoryFromStoryblok } from "@/utils/fetchStoryFromStoryblok";
import { Alarm } from "@mui/icons-material";

const Home = ({ story }) => {
  const loadedStory = useStoryblokState(story);

  return (
    <Wrapper>
      <Grid container sx={{ minHeight: "100vh", overflow: "hidden" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ backgroundColor: "#461a3e" }}>
          <Stack
            direction={"column"}
            spacing={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "2rem",
            }}
          >
            <Typography variant="mainHeading">
              {loadedStory?.content?.login_main_heading}
            </Typography>
            <Typography className="subHeading">
              {loadedStory?.content?.login_sub_heading}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Stack className="login_container">
            {story?.content?.is_maintenance ? (
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
                    Due to technical issues or scheduled maintenance, the login
                    functionality is currently disabled.Please try again later.
                    Thank you for your patience and understanding.
                  </Typography>
                </Box>
              </>
            ) : (
              <Stack direction={"column"}>
                <Image
                  height={100}
                  width={200}
                  alt="titan-travel"
                  src={loadedStory?.content?.logo?.filename}
                  unoptimized
                  style={{ width: "11rem", height: "auto" }}
                />
                <Stack
                  spacing={2}
                  direction={"row"}
                  sx={{ alignItems: "center", marginTop: 5 }}
                >
                  <HttpsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography sx={{ fontWeight: "bold" }}>
                    Safe and secure
                  </Typography>
                </Stack>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", marginTop: 3 }}
                >
                  {loadedStory?.content?.login_title}
                </Typography>
                <TextField
                  required
                  focused
                  id="outlined-required"
                  label="ABTA/ATAS or AFTA number"
                  sx={{
                    marginTop: 5,
                  }}
                />
                <TextField
                  required
                  focused
                  id="outlined-required"
                  label="Password"
                  sx={{
                    marginTop: 3,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#9f5890",
                    marginTop: 3,
                    fontWeight: 500,
                    marginLeft: "auto",
                  }}
                >
                  Forgot password?
                </Typography>
                <Button
                  sx={{
                    marginTop: 3,
                  }}
                  variant="contained"
                >
                  {loadedStory?.content?.login_button_label}
                </Button>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#9f5890",
                    my: 3,
                    textDecoration: "underline",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  I&apos;m a customer
                </Typography>
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  .subHeading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 2rem;
    max-width: 13rem;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    background-color: #9f5890;
    border-radius: 10px;
    text-align: center;

    @media only screen and (max-width: 1200px) {
      max-width: 100%;
      padding: 1rem;
    }
  }

  .login_container {
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
`;

export async function getStaticProps() {
  let slug = "signin";

  let sbParams = {
    version: "draft",
  };

  try {
    const story = await fetchStoryFromStoryblok(slug, sbParams);

    return {
      props: {
        story: story,
        key: story ? story.id : null,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
  }
}
