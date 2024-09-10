import { Box, Button } from "@mui/material";
function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
        backgroundColor: "#f3f5f7",
      }}
    >
      <Button
        sx={{
          backgroundColor: "#17587d",
          width: "10rem",
          "&:hover": {
            backgroundColor: "#4f98a4",
          },
        }}
        variant="contained"
      >
        login
      </Button>
      <Button
        sx={{
          backgroundColor: "black",
          width: "10rem",

          "&:hover": {
            backgroundColor: "gray",
          },
        }}
        variant="contained"
      >
        Not login
      </Button>
    </Box>
  );
}

export default Home;
