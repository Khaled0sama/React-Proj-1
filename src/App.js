import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import CSS from "./pages/css";
import Javascript from "./pages/javascript";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/javascript" element={<Javascript />} />
      </Routes>
    </div>
  );
}

export default App;
