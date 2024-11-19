import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import FirstPage from "./pages/FirstPage"; // Ensure you have this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/FirstPage" element={<FirstPage />} />
      </Routes>
    </Router>
  );
}

export default App;
