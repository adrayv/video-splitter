import React from "react";
import Splitter from "./features/Splitter";
import { Provider } from "react-redux";
import store from "./store";

export default () => (
  <Provider store={store}>
    <Splitter />
  </Provider>
);
