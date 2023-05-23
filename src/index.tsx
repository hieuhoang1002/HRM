import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import VietNamese from "./Language/vi.json";
import English from "./Language/en.json";

// const local = navigator.language;

// let language;
// if (local === "en") {
//   language = English;
// } else {
//   language = VietNamese;
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <IntlProvider locale={local} messages={language}> */}
      <App />
      {/* </IntlProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
