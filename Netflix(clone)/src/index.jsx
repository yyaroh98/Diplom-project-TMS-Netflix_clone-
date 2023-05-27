import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
