import { createRoot } from "react-dom/client";
import Home from "./components/mains/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAPI from "./components/mains/AddAPI";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Add" element={<AddAPI />} />
    </Routes>
  </BrowserRouter>
);
