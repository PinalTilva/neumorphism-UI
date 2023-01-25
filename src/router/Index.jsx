import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutingConfig } from "../config/RoutingConfig";

function TheRoutes() {
  const getDynamicRoutes = () => {
    let content = [];
    Object.values(RoutingConfig).forEach((route, ind) => {
      content.push(
        <Route key={ind} index path={route.path} element={route.element} />
      );
    });
    return content;
  };

  return (
    <>
      <Routes>{getDynamicRoutes()}</Routes>
    </>
  );
}

export default TheRoutes;
