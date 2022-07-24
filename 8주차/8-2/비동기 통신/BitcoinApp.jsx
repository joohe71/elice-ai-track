import React from "react";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import UserDetailPage from "./pages/UserDetailPage";

export default function BitcoinApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/users" />
        <Route path="/users" component={UsersPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/:email/detail" component={UserDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}
