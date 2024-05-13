import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { ProjectProvider } from "@/provider/Project.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ProjectProvider>
        <main className="dark text-foreground bg-background h-full">
          <App />
        </main>
      </ProjectProvider>
    </NextUIProvider>
  </React.StrictMode>
);
