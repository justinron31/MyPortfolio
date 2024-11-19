import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// CSS FILES
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
