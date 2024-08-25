import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, protectedRoutes } from "./allRoutes";
import NonAuthLayout from "../components/Layout/NonAuthLayout";
import AuthProtected from "./AuthProtected";
import AuthLayout from "../components/Layout/AuthLayout";
const index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes?.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            />
          ))}
        </Route>
        <Route>
          {protectedRoutes?.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <AuthProtected route={route}>
                  <AuthLayout>{route.component}</AuthLayout>
                </AuthProtected>
              }
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default index;
