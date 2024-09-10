import { Box, Typography, Button } from "@mui/material";
import AnnouncementItem from "./AnnouncementItem";
function AnnouncementSection() {
  return (
    <Box
      sx={{
        width: { xs: "90%", lg: "75%" },
        padding: ".75rem",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: ".5rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          fontFamily={"Inria Sans"}
          sx={{ color: "#5d6c6b" }}
        >
          Announcements
        </Typography>
        <Button
          sx={{
            color: "#52CAC3",
            fontWeight: "700",
            fontFamily: "Inria Sans",
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: "#52CAC3",
              color: "white",
            },
          }}
        >
          All
        </Button>
      </Box>
      <Typography
          variant="subtitle1"
          fontWeight={400}
          fontFamily={"Inria Sans"}
          sx={{ color: "#c7d3da" }}
        >
We educate warriors,stay updated!

</Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <AnnouncementItem />
        <AnnouncementItem />

        <AnnouncementItem />

        <AnnouncementItem />
      </Box>
    </Box>
  );
}

export default AnnouncementSection;
