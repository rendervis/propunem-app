import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import "./index.css";

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
