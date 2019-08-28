import React from "react";
import Splitter from "./features/Splitter";
import { Provider } from "react-redux";
import { Provider as UIProvider } from "./contexts/ui";
import { Provider as VideoProvider } from "./contexts/video";
import { Provider as ResultsProvider } from "./contexts/results";
import store from "./store";

export default () => (
  <Provider store={store}>
    <UIProvider>
      <VideoProvider>
        <ResultsProvider>
          <Splitter />
        </ResultsProvider>
      </VideoProvider>
    </UIProvider>
  </Provider>
);
