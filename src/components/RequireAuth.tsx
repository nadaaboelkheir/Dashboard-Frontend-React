import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireAuth;
