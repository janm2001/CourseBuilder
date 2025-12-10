import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./components/layout/Layout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import CreateCourse from "./pages/CreateCourse/CreateCourse.tsx";

createRoot(document.getElementById("root")!).render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/course" element={<CreateCourse />} />
      </Routes>
    </BrowserRouter>
  </Layout>
);
