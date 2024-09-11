import {
  TextField,
  Box,
  InputAdornment,
  Typography,
  Badge,
  Switch,
  FormControlLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import photo from "../assets/Avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../redux/slices/languageSlice";
import { RootState } from "../redux/store";

function Header() {
  const { t, i18n } = useTranslation("translation"); 
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.target.checked ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
    dispatch(changeLanguage(newLanguage));
  };
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
       { t("headerName") }
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "3rem" }}>
        <TextField
          variant="outlined"
          placeholder={t("searchLable")}
          id="input-with-icon-textfield"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },

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
            gap: {
              xs: "1.25rem",
              sm: "2.5rem",
            },
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
          <FormControlLabel
            control={
              <Switch
                checked={language === "en"}
                onChange={handleChangeLanguage}
                inputProps={{ "aria-label": "language switch" }}
              />
            }
            label={language === "en" ? "English" : "العربية"}
          />
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
