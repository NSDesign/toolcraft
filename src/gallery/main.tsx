import * as React from "react";
import { createRoot } from "react-dom/client";

import { ToolcraftThemeProvider } from "@/toolcraft/runtime/react";

import "../styles.css";
import "./gallery.css";
import { GalleryApp } from "./gallery-app";

const rootElement = document.getElementById("gallery-root");

if (!rootElement) {
  throw new Error("Gallery root element #gallery-root was not found.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <ToolcraftThemeProvider>
      <GalleryApp />
    </ToolcraftThemeProvider>
  </React.StrictMode>,
);
