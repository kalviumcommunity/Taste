import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FoodComboDummyData from "./components/FoodComboDummyData";
import FoodComboPage from "./pages/FoodComboPage";
import FoodComboForm from "./components/FoodComboForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foodcombo/:comboId" element={<FoodComboDummyData />} />
        <Route path="/foodcombos" element={<FoodComboPage />} />
        <Route path="/foodcomboform" element={<FoodComboForm />} />
        <Route path="/foodcomboform/:id?" element={<FoodComboForm />} />


      </Routes>
    </Router>
  );
}

export default App;


