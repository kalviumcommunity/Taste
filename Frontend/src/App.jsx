import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FoodComboCard from "./components/FoodComboCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foodcombo/:comboId" element={<FoodComboCard />} />
      </Routes>
    </Router>
  );
}

export default App;
