import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
const App = () => {
  return (
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
  );
};

export default App;
