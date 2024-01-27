import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Trending from "./pages/Trending";
import UserProfile from "./pages/UserProfile";
import Wallets from "./pages/Wallets";
import Information from "./pages/Information";
import Discount from "./pages/Discount";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard setTheme={setTheme} theme={theme} />}
        />
        <Route
          path="/trending"
          element={<Trending setTheme={setTheme} theme={theme} />}
        />
        <Route
          path="/user-profile"
          element={<UserProfile setTheme={setTheme} theme={theme} />}
        />
        <Route
          path="/wallets"
          element={<Wallets setTheme={setTheme} theme={theme} />}
        />
        <Route
          path="/information"
          element={<Information setTheme={setTheme} theme={theme} />}
        />
        <Route
          path="/discounts"
          element={<Discount setTheme={setTheme} theme={theme} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
