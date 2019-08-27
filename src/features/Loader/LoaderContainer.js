import React, { useEffect, useContext } from "react";
import Context from "../../contexts/ui";
import LoaderView from "./LoaderView";

export default () => {
  const context = useContext(Context);
  useEffect(() => console.log("NEW UI CONTEXT", context), [context]);
  return <LoaderView shouldShowLoader={context.state.isLoading} />;
};
