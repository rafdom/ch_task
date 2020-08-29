import React from "react";
import Home from "../pages/home";
import Logo from "./logo";
import Filter from "./filter";
import Header from "./tableHeader";
import Columns from "./tableColumns";

function App() {
  return (
    <Home>
      <Logo />
      <Filter />
      <Header />
      <Columns />
    </Home>
  );
}

export default App;
