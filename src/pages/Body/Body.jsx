import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Contact } from "../Contact/Contact";
import { Social } from "../Social/Social";

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/social" element={<Social />} />
    </Routes>
  );
};