import React from "react";
import Projet from "./pages/Projet";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Competences from "./components/Competences";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/compétences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
