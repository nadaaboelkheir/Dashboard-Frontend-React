import HouseIcon from "@mui/icons-material/House";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import InsightsIcon from "@mui/icons-material/Insights";
import CampaignIcon from "@mui/icons-material/Campaign";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Typography } from "@mui/material";
import SlidebarItem, { itemProps } from "./SidebarItem";

const NavItems: itemProps[] = [
  {
    title: "Dashboard",
    icon: <HouseIcon />,
  },
  {
    title: "Schedule",
    icon: <CalendarMonthIcon />,
  },
  { title: "Courses", icon: <MenuBookIcon /> },
  { title: "GradeBook", icon: <SchoolIcon /> },
  { title: "Performance", icon: <InsightsIcon /> },
  { title: "Announcements", icon: <CampaignIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];
const Sidebar = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #17587d 0%, #4f98a4 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        height: {
          lg: "100vh",
          xs: "10rem",
        },
        width: {
          xs: "100%",
          lg: "18%",
        },
        overflowX: {
          xs: "hidden",
          lg: "hidden",
        },
        whiteSpace: {
          xs: "nowrap",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          alignItems: {
            xs: "center",
            lg: "center",
          },
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          fontFamily={"Inria Sans"}
          my={2}
          sx={{
            color: "white",
            display: { xs: "none", sm: "block" },
            mx: {
              xs: 0,
              sm: 2,
            },
          }}
        >
          Coligo
        </Typography>
        <Box
          sx={{
            width: "100%",

            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: "1rem",
          }}
        >
          {NavItems.map((NavItem) => {
            return (
              <SlidebarItem
                key={NavItem.title}
                icon={NavItem.icon}
                title={NavItem.title}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
