import { Typography, Box, Divider, Button } from "@mui/material";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
// import HourglassTopIcon from '@mui/icons-material/HourglassTop';
function DueItem() {
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
      }}
    >
        <Box sx={{ display: "flex" , alignItems: "center", gap: ".5em" }}>
        <AssignmentTurnedInIcon sx={{color: "#52CAC3"}}/>
      <Typography
        variant="h6"
        fontWeight={700}
        fontFamily={"Inria Sans"}
        sx={{ color: "#5d6c6b" }}
      >
        Course : Arabic K12{" "}
      </Typography>
      </Box>

      <Typography
        variant="h6"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{ color: "#c7d3da" }}
      >
        Course : Arabic K12{" "}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{ color: "#c7d3da" }}
      >
        Topic : Arabic{" "}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{ color: "#c7d3da" }}
      >
        Due To: 12/12/2022 12:00 PM
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
        {" "}
        Start Quiz
      </Button>
      <Divider sx={{ width: "90%" }} />
    </Box>
  );
}

export default DueItem;
