import "./App.css";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./myPage/Home";
import ContactUs from "./myPage/ContactUs";
import AboutUs from "./myPage/AboutUs";
import Form from "./myPage/LoenBank/form";
import Footer from "./myPage/footer";
function App() {
  return (
    <div className="App">
      <NavBar />

      {/* ROUTER */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
