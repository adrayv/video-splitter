import React from "react";
import Splitter from "./features/Splitter";
import { Provider } from "react-redux";
import { Provider as UIProvider } from "./contexts/ui";
import store from "./store";

export default () => (
  <Provider store={store}>
    <UIProvider>
      <Splitter />
    </UIProvider>
  </Provider>
);
