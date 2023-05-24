import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { IntlProvider } from "react-intl";

import VietNamese from "./Language/vi.json";
import English from "./Language/en.json";
import rootReducer from "./store/reducers/rootReducers";

// const local = navigator.language;

// let language;
// if (local === "en") {
//   language = English;
// } else {
//   language = VietNamese;
// }

const reduxStore = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <IntlProvider locale={local} messages={language}> */}
      <Provider store={reduxStore}>
        <App />
      </Provider>
      {/* </IntlProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
