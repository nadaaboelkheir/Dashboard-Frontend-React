import { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

export interface itemProps {
  icon: ReactNode;
  title: string;
}
const SidebarItem = ({ icon, title }: itemProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"start"}
      gap="1rem"
      sx={{
        cursor: "pointer",
        py: "1rem",
        px: "1rem",
        height: {
          lg: "50%",
          sm: "4rem",
        },

        color: "white",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "white",
          color: "#17587d",
        },
      }}
    >
      {icon}
      <Typography
        variant="h6"
        fontWeight={400}
        fontFamily={"Inria Sans"}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default SidebarItem;
