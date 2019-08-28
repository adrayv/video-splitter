import React, { useContext } from "react";
import ResetResultsView from "./ResetResultsView";
import ResultsContext from "../../contexts/results";

export default () => {
  const resultsContext = useContext(ResultsContext);
  return <ResetResultsView onResetClick={resultsContext.resetResults} />;
};
