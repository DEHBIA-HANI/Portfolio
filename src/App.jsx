import React from "react";
import Projet from "./pages/Projet";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Competences from "./components/Competences";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta
          name="application-name"
          content="Dehbia Hachi - Développeur Front-End"
        />
        <meta name="theme-color" content="#1d3b31" />
        <meta name="msapplication-TileColor" content="#1d3b31" />
        <meta
          name="description"
          content="Développeuse Front-End experte en JavaScript et React. Découvrez mon portfolio et mes compétences en création d'interfaces web dynamiques et performantes."
        />
        <meta property="og:type" content="website" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Dehbia Hachi - Développeur Front-End"
        />
        <meta
          property="og:description"
          content="Développeuse Front-End experte en JavaScript et React."
        />
        <meta property="og:image" content="/image/Dehbia2.webp" />
        <meta property="og:url" content="https://votre-site-web.com" />{" "}
        {/* Remplacez par l'URL de votre site */}
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dehbia Hachi - Développeur Front-End"
        />
        <meta
          name="twitter:description"
          content="Développeuse Front-End experte en JavaScript et React."
        />
        <meta name="twitter:image" content="/image/Dehbia2.webp" />
        <meta name="twitter:url" content="https://votre-site-web.com" />{" "}
        {/* Remplacez par l'URL de votre site */}
      </Helmet>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/compétences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
