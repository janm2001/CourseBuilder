import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Layout from "./components/layout/Layout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/course" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </Layout>
);
