import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import ConfigRoutes from "./ConfigRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConfigRoutes />
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
