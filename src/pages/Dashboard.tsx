import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AnnouncementSection from "../components/AnnouncementSection";
import DueSection from "../components/DueSection";

const Dashboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f5f7",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        height: "100vh",
        overflowY: "hidden",
        padding: 0,
      }}
    >
      <Sidebar />
      <Box
        sx={{ width: "100%", overflowY: "scroll", justifyContent: "center" }}
      >
        <Header />
        <Hero />
        <Box
          sx={{
            width: "90%",
            margin: "2rem auto",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: "1rem",
            alignItems:{xs:"center",lg:"flex-start"} ,
          }}
        >
          <AnnouncementSection />
          <DueSection />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
