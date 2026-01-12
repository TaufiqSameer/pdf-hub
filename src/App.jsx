import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Year1 from "./pages/year1";
import Year2 from "./pages/Year2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/year1" element={<Year1 />} />
      <Route path="/year2" element={<Year2 />} />
    </Routes>
  );
}
