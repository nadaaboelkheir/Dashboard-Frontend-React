import { Box, Button, Typography } from "@mui/material";
import hero from "../assets/hero.png";
import { t } from "i18next";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Hero() {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        alignItems: "center",
        justifyContent: {
          xs: "center",
          lg: "space-around",
        },
        padding: {
          xs: "1rem",
          sm: "2rem",
          lg: "2rem 0",
        },
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        margin: "2rem auto",

        borderRadius: ".5rem",
        textAlign: {
          xs: "center",
          lg: "left",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: {
            xs: "100%",
            lg: "60%",
          },
          alignItems: {
            xs: "center",
            lg: "flex-start",
          },
        }}
      >
        <Box
          component={"img"}
          loading="lazy"
          src={hero}
          sx={{
            width: {
              xs: "80%",
              sm: "60%",
              lg: "25%",
            },
            maxWidth: "100%",
            margin: {
              xs: "1rem auto",
              lg: "0",
            },
            display: {
              xs: "block",
              lg: "none",
            },
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Inria Sans",
            fontWeight: "700",
            backgroundImage: "linear-gradient(90deg, #17587d 0%, #4f98a4 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              lg: "3rem",
            },
          }}
        >
          {t("heroTitle")}{" "}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inria Sans",
            fontWeight: "400",
            color: "rgb(141 151 150)",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              lg: "1.5rem",
            },
            textAlign: language === "en" ? "left" : "right",
          }}
        >
          {t("heroSubtitle")}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "400",
            color: "#c7d3da",
            fontStyle: "italic",
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              lg: "1.2rem",
            },
          }}
        >
          {t("quote")}{" "}
        </Typography>
        <Button
          sx={{
            backgroundColor: "#55cfc6",
            width: "fit-content",
            padding: "0.5rem 1.5rem",
            fontFamily: "Inria Sans",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              lg: "1.2rem",
            },
            fontWeight: "bold",
          }}
          variant="contained"
          size="large"
        >
          {t("heroButton")}
        </Button>
      </Box>
      <Box
        component={"img"}
        loading="lazy"
        src={hero}
        alt="hero"
        sx={{
          width: {
            xs: "80%",
            sm: "60%",
            lg: "25%",
          },
          maxWidth: "100%",
          margin: {
            xs: "1rem auto",
            lg: "0",
          },
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      />
    </Box>
  );
}

export default Hero;
