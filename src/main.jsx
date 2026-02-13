import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DarkTheme from "./DarkTheme";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkTheme />
  </StrictMode>
);
