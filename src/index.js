import React from "react";
import ReactDOM from "react-dom";
import App from "./app"
import { Router } from "react-router-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { history } from "./config/config";
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

