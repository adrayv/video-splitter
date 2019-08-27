import React from "react";
import Splitter from "./features/Splitter";
import { Provider } from "react-redux";
import { Provider as UIProvider } from "./contexts/ui";
import { Provider as VideoProvider } from "./contexts/video";
import store from "./store";

export default () => (
  <Provider store={store}>
    <UIProvider>
      <VideoProvider>
        <Splitter />
      </VideoProvider>
    </UIProvider>
  </Provider>
);
