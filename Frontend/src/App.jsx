import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FoodComboDummyData from "./components/FoodComboDummyData";
import FoodComboPage from "./pages/FoodComboPage";
import FoodComboForm from "./components/FoodComboForm";
import Signup from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/foodcombo/:comboId" element={<FoodComboDummyData />} />
        <Route path="/foodcombos" element={<FoodComboPage />} />
        <Route path="/foodcomboform" element={<FoodComboForm />} />
        <Route path="/foodcomboform/:id" element={<FoodComboForm />} />
      </Routes>
    </Router>
  );
}

export default App;


