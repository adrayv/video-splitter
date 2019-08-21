import React, { useEffect, useContext } from "react";
import Context, { Consumer } from "../../contexts/ui";
import LoaderView from "./LoaderView";

export default () => {
  const context = useContext(Context);
  useEffect(() => console.log("NEW UI CONTEXT", context), [context]);
  return (
    <Consumer>
      {context => <LoaderView shouldShowLoader={context.state.isLoading} />}
    </Consumer>
  );
};
