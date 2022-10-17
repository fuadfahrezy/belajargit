import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/App.css";

import { Navbar, MainContent } from "./components";

function App() {
  return (
    <div className="container-fluid">
        <Navbar />
        <MainContent />
    </div>
  );
}

export default App;
