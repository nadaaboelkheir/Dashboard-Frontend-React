import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store";

const App = () => {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div
      className={`${language === "en" ? "text-left" : "text-right"}`}
      dir={`${language === "en" ? "ltr" : "rtl"}`}
    >
      <Router>
        <Routes>
          <Route path="/*" element={<Error />} />
          <Route path="/" element={<Home />} />
          {/* Properly wrap the Dashboard with RequireAuth */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
