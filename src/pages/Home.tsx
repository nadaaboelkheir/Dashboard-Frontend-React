import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };
  const handleUnauthorized = () => {
    if (!isAuthenticated) {
      toast("You are not authenticated!", { type: "error" });
    } else {
      navigate("/dashboard");
    }
  };

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
        onClick={handleLogin}
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
        onClick={handleUnauthorized}
      >
        Not login
      </Button>
              <ToastContainer />

    </Box>
  );
};

export default Home;
