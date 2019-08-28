import React, { useContext } from "react";
import ResultsView from "./ResultsView";
import ResultsContext from "../../contexts/results";

export default () => {
  const resultsContext = useContext(ResultsContext);
  return (
    <ResultsView
      leftVideoUrl={resultsContext.getLeftVideo()}
      rightVideoUrl={resultsContext.getRightVideo()}
      screenshot={resultsContext.getScreenshot()}
    />
  );
};
