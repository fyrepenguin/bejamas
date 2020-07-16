import React from "react";
import loadable from "@loadable/component";

const LoadableComponent = loadable(() => import("./navbar"));

const LoadableNav = () => {
  return <LoadableComponent />;
};

export default LoadableNav;
