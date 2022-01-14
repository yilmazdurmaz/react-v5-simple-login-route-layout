import React from "react";
import { Switch, Route, Redirect } from "react-router";

import { WithLayout } from "./WithLayout.js";
import { MainLayout } from "./MainLayout.js";

function getUser() {
  return localStorage.getItem("user");
}

export function PrivateRoute({ component, ...rest }) {
  return (
    <Switch>
      <Route
        {...rest}
        render={(matchProps) =>
          getUser() ? (
            <WithLayout
              {...matchProps}
              component={component}
              layout={MainLayout}
            />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: matchProps.location } }}
            />
          )
        }
      />
    </Switch>
  );
}
