import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
// import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      {/* <Helmet>
      </Helmet> */}
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
