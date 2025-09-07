import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ui/css/index.css";
import { IsilApplication } from "./IsilApplication";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IsilApplication />
  </StrictMode>
);
