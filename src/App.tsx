import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import TranscribingScreen from "./pages/TranscribingScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/transcribingScreen" element={<TranscribingScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
