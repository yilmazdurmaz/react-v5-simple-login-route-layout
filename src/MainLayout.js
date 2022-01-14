import React from "react";
import routes from "./app-routes";
import { Link } from "react-router-dom";

export const MainLayout = ({ component: Component,...props }) => {
  return (
    <>
      <main>React App (v5) with multiple routes and simple login</main>
      <hr/>
      <Component {...props}/>
      <hr />
      <nav>
        {routes.map(({ path, component }) => (
            <Link key={path} to={path}>{path}<br/></Link>
            
        ))}
        <Link key={"logout"} to={"/logout"}>{"/logout"}</Link>
      </nav>
    </>
  );
};
