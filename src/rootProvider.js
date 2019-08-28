import React from "react";
import { Provider as UIProvider } from "./contexts/ui";
import { Provider as VideoProvider } from "./contexts/video";
import { Provider as ResultsProvider } from "./contexts/results";
import { Provider as CloudinaryProvider } from "./contexts/cloudinary";

export default ({ children }) => (
  <UIProvider>
    <VideoProvider>
      <ResultsProvider>
        <CloudinaryProvider>{children}</CloudinaryProvider>
      </ResultsProvider>
    </VideoProvider>
  </UIProvider>
);
