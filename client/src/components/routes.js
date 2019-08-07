import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";

import ConversationIndex from "./conversations/index";

import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/conversations" component={ConversationIndex} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} /> 
    </Switch>
  );
}

export default Routes;
