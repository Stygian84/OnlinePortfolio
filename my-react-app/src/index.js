import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ContactContent, ContactTop } from "./pages/Contact";
import { HomeContent, HomeTop } from "./pages/Home";
import { ProjectsContent, ProjectsTop } from "./pages/Projects";
import { TechStackContent, TechStackTop } from "./pages/TechStack";
import { YouTubeDLTop, YouTubeDLContent } from "./pages/YouTubeDL";
import { Divider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div id="wrapper" className="wrapper">
        <Top />
        <Divider
          sx={{
            borderColor: "#404040",
            "&::before, &::after": {
              bgcolor: "#020202",
              boxShadow: "2px 2px 8px rgba(64, 64, 64, 0.5)",
            },
          }}
          className="divider"
          variant="middle"
        />
        <Content />
      </div>
    </HashRouter>
  </React.StrictMode>
);

function Top() {
  return (
    <Routes>
      <Route path="/" exact element={<HomeTop />} />
      <Route path="/Projects" element={<ProjectsTop />} />
      <Route path="/TechStack" element={<TechStackTop />} />
      <Route path="/Contact" element={<ContactTop />} />
      <Route path="/youtube-dl" element={<YouTubeDLTop />} />
    </Routes>
  );
}

function Content() {
  return (
    <Routes>
      <Route path="/" exact element={<HomeContent />} />
      <Route path="/Projects" element={<ProjectsContent />} />
      <Route path="/TechStack" element={<TechStackContent />} />
      <Route path="/Contact" element={<ContactContent />} />
      <Route path="/youtube-dl" element={<YouTubeDLContent />} />
    </Routes>
  );
}
