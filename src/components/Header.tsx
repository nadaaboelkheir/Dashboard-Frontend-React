import {
  TextField,
  Box,
  InputAdornment,
  Typography,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import photo from "../assets/Avatar.png";
function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "1rem",
        paddingRight: "1.5rem",
        paddingLeft: { xs: "1rem", sm: "4rem" },
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        fontFamily={"Inria Sans"}
        sx={{ color: "#5d6c6b" }}
      >
        Welcome Talia,
      </Typography>
      <Box
        sx={{   display: "flex", alignItems: "center",  gap: "3rem"}}>
      <TextField
        variant="outlined"
        placeholder="Search for anything"
        id="input-with-icon-textfield"

        sx={{
       
          display:{
            xs: "none", sm: "block" },

          backgroundColor: "white",
          borderRadius: "30px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            "& .MuiInputBase-input": {
              padding: "12px",
            },
            "& fieldset": {},
            "&.Mui-focused fieldset": {
              borderColor: "#eeee",
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap:{
            xs: "1.25rem",
            sm: "2.5rem",
          } ,
        }}
      >
        <Badge
          badgeContent={1}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#4ecdc4",
              color: "white",
              top: "10%",
              right: "10%",
              transform: "scale(1) translate(50%, -50%)",
              textAlign: "center",
              border: "2px solid white",
              height: "1.5rem",
              width: "1.5rem",
              borderRadius: "50%",
            },
          }}
        >
          <NotificationsIcon
            style={{ fontSize: "35px", flexShrink: 0, color: "#4c95a2" }}
          />
        </Badge>
        <Badge
          badgeContent={3}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#4ecdc4",
              color: "white",
              top: "10%",
              right: "10%",
              transform: "scale(1) translate(50%, -50%)",
              textAlign: "center",
              border: "2px solid white",
              height: "1.5rem",
              width: "1.5rem",
              borderRadius: "50%",
            },
          }}
        >
          <EmailIcon
            style={{ fontSize: "35px", color: "#4c95a2", flexShrink: 0 }}
          />
        </Badge>
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
      </Box>
      </Box>
    </Box>
  );
}

export default Header;
