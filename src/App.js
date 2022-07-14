import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Blinddate from "./pages/Blinddate";
import Dotogether from "./pages/Dotogether";
import Restaurant from "./pages/Restaurant";
import Rentedroom from "./pages/Rendtedroom";

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blinddate" element={<Blinddate />} />
        <Route path="/dotogether" element={<Dotogether />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/rentedroom" element={<Rentedroom />} />
      </Routes>
    </div>
  );
}

export default App;
