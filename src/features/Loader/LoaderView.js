import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${props =>
    props.shouldShow ? "rgba(0,0,0,0.5)" : "transparent"};
  pointer-events: ${props => (props.shouldShow ? "initial" : "none")};
`;
export default ({ shouldShowLoader }) => {
  return <Wrapper shouldShow={shouldShowLoader} />;
};
