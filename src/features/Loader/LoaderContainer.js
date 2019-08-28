import React, { useMemo, useContext } from "react";
import Context from "../../contexts/ui";
import LoaderView from "./LoaderView";

export default () => {
  const context = useContext(Context);
  return useMemo(() => {
    return <LoaderView shouldShowLoader={context.state.isLoading} />;
  }, [context]);
};
