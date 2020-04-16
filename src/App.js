import React from "react";
import "./App.scss";
import Home from "./pages/home.jsx";
import Navbar from "./components/common/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
