import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ContactContent, ContactTop } from "./pages/Contact";
import { HomeContent, HomeTop } from "./pages/Home";
import { ProjectsContent, ProjectsTop } from "./pages/Projects";
import { TechStackContent, TechStackTop } from "./pages/TechStack";
import { Divider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>
);

function Top() {
  return (
    <Routes>
      <Route path="/" exact element={<HomeTop />} />
      <Route path="/Projects" element={<ProjectsTop />} />
      <Route path="/TechStack" element={<TechStackTop />} />
      <Route path="/Contact" element={<ContactTop />} />
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
    </Routes>
  );
}
