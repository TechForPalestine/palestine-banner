import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="font-geist text-zinc-900">
      <App />
      <Toaster />
    </main>
  </React.StrictMode>
);
