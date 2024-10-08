import { Box, Typography, Button, CircularProgress } from "@mui/material";
import AnnouncementItem from "./AnnouncementItem";
import ErrorIcon from "@mui/icons-material/Error";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAnnouncements,
  Announcement,
} from "../services/FetchAannouncementS";
import { t } from "i18next";

const AnnouncementSection = () => {
  const { data, isLoading, error } = useQuery<Announcement[]>({
    queryKey: ["announcements"],
    queryFn: fetchAnnouncements,
  });

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
          {t("Announcements")}
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
          {t("all")}
        </Button>
      </Box>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{ color: "#c7d3da" }}
      >
      {t("sectionSubtitle")}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: isLoading || error ? "center" : "flex-start",
        }}
      >
        {isLoading && (
          <Box>
            <CircularProgress sx={{ color: "#52CAC3" }} />
          </Box>
        )}
        {error && (
          <Box sx={{ display: "flex", alignItems: "center", gap: ".5em" }}>
            <ErrorIcon sx={{ color: "#c7d3da", fontSize: "3rem" }} />{" "}
            <Typography
              variant="h6"
              fontWeight={400}
              fontFamily={"Inria Sans"}
              sx={{ color: "#c7d3da" }}
            >
              {error.message}
            </Typography>{" "}
          </Box>
        )}
        {data?.length === 0 && (
          <Typography
            variant="h6"
            fontWeight={400}
            fontFamily={"Inria Sans"}
            sx={{ color: "#c7d3da" }}
          >
            No announcements found
          </Typography>
        )}
        {data?.map((announcement) => (
          <AnnouncementItem
            key={announcement._id}
            announcement={announcement}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AnnouncementSection;
