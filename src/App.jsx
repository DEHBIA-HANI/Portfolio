import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
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
        <meta
          property="og:url"
          content="https://portfolio-zg8o-813ej80x5-dehbia-hanis-projects.vercel.app"
        />{" "}
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
        <meta
          name="twitter:url"
          content="https://portfolio-zg8o-813ej80x5-dehbia-hanis-projects.vercel.app"
        />{" "}
      </Helmet>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
