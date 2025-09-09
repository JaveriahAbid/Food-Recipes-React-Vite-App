import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Strict mode causes the double rendering [in dev mode only]
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
