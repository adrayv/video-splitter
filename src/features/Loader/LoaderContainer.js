import React from "react";
import { Context } from "../../contexts/ui";
import LoaderView from "./LoaderView";

export default class LoaderContainer extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => <LoaderView shouldShowLoader={context.state.isLoading} />}
      </Context.Consumer>
    );
  }
}
