import { Box, Typography, Button, CircularProgress } from "@mui/material";
import DueItem from "./DueItem";
import { useQuery } from "@tanstack/react-query";
import { fetchDues, Due } from "../services/FetchDues";
import ErrorIcon from "@mui/icons-material/Error";

const DueSection = () => {
  const { data, isLoading, error } = useQuery<Due[]>({
    queryKey: ["dues"],
    queryFn: fetchDues,
  });
  return (
    <Box
      sx={{
        width: { xs: "90%", lg: "25%" },
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
          What Dues ?{" "}
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
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "1rem",
          }}
        >
          <CircularProgress sx={{ color: "#52CAC3" }} />
        </Box>
      )}
      {error && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".5em",
            mt: "1rem",
          }}
        >
          <ErrorIcon sx={{ color: "#c7d3da", fontSize: "1.5rem" }} />{" "}
          <Typography
            variant="subtitle1"
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
          variant="subtitle1"
          fontWeight={400}
          fontFamily={"Inria Sans"}
          sx={{ color: "#c7d3da", mt: "1rem" }}
        >
          No Due found
        </Typography>
      )}
      {data?.map((due) => (
        <DueItem key={due._id} due={due} />
      ))}
    </Box>
  );
};

export default DueSection;
