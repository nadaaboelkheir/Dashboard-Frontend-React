import { Box, Typography, Divider } from "@mui/material";
import photo from "../assets/Avatar.png";
import { Announcement } from "../services/FetchAannouncementS";
interface AnnouncementItemProps {
  announcement: Announcement; 
}
const AnnouncementItem = ({ announcement }: AnnouncementItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        gap: "1rem",
        marginTop: "1rem",
        padding: "1rem",
      }}
    >
      <Box
        component="img"
        src={photo}
        alt="profile"
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.2rem",
            alignItems: {
              xs: "center",
              sm: "flex-start",
            },
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            fontFamily={"Inria Sans"}
            sx={{
              color: "#5d6c6b",
              whiteSpace: { lg: "nowrap", sm: "normal" },
            }}
          >
            {announcement.userName}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inria Sans",
              fontWeight: "400",
              color: "#c7d3da",
              fontSize: "1rem",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {announcement.subject}
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        ></Box>
        <Divider orientation="vertical" flexItem />

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "400",
            color: "#c7d3da",
            fontSize: {
              xs: "0.8rem",
              sm: ".8rem",
              lg: "1rem",
            },
          }}
        >
          {announcement.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default AnnouncementItem;
