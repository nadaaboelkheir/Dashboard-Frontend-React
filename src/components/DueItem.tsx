import { Typography, Box, Divider, Button } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { Due } from "../services/FetchDues";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { t } from "i18next";
import { ar } from "date-fns/locale";

interface DueItemProps {
  due: Due;
}

const DueItem = ({ due }: DueItemProps) => {
  const language = useSelector((state: RootState) => state.language.language);

  const dueDate = new Date(due.DueTo);
  const formattedDate = format(dueDate, "d MMM yyyy - hh:mm a", {
    locale: language === "ar" ? ar : undefined,
  });
  const textAlign = language === "en" ? "left" : "right";
  const direction = language === "en" ? "ltr" : "rtl";

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        marginTop: "1rem",
        padding: "1rem",
        textAlign: textAlign,
        direction: direction,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: ".5em" }}>
        {due.dueType === "Assignment" ? (
          <HourglassTopIcon sx={{ color: "#52CAC3" }} />
        ) : (
          <AssignmentTurnedInIcon sx={{ color: "#52CAC3" }} />
        )}
        <Typography
          variant="h6"
          fontWeight={700}
          fontFamily={"Inria Sans"}
          sx={{ color: "#5d6c6b" }}
        >
          {due.title}
        </Typography>
      </Box>

      <Typography
        variant="h6"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{ color: "#c7d3da" }}
      >
        {t("course")} : {due.courseName}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{ color: "#c7d3da" }}
      >
        {t("topic")} : {due.topic}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{ color: "#c7d3da" }}
      >
        {t("DueTo")} : {formattedDate}
      </Typography>
      <Button
        sx={{
          border: "1px solid #52CAC3",
          borderRadius: ".5rem",
          color: "#52CAC3",
          width: "90%",
          marginTop: "1rem",
          marginBottom: "1.5rem",
        }}
        variant="outlined"
      >
        {t("Start")} {t(due.dueType)}
      </Button>
      <Divider sx={{ width: "90%" }} />
    </Box>
  );
};

export default DueItem;
