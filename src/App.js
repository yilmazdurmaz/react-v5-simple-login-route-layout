import routes from "./app-routes";
import {Login,Logout} from "./routes"

import { Switch, Redirect, Route } from "react-router";
import {PrivateRoute} from "./PrivateRoute"

function App() {
  return (
    <Switch>
      <Route exact key="/login" path="/login" render={Login}/>
      <Route exact key="/logout" path="/logout" render={Logout}/>
    {routes.map(({ path, component }) => (
      <PrivateRoute
       exact
       key={path}
       path={path}
       component={component}
      />
     ))}
    <Redirect to={'/'} />
   </Switch>
  );
}

export default App;
