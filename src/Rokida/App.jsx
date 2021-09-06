import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./app/store";
import Checkout from "./Components/Checkout";
import Layout from "./Components/Layout/Layout";
import Loading from "./Other/Loading";

const Home = lazy(() => import("./Pages/Home"));
const Items = lazy(() => import("./Pages/Items"));
const Support = lazy(() => import("./Pages/Support"));
const User = lazy(() => import("./Pages/User"));
const Login = lazy(() => import("./Pages/Login"));
const Registration = lazy(() => import("./Pages/Registration"));
const Detail = lazy(() => import("./Pages/Detail"));
const Cart = lazy(() => import("./Pages/Cart"));
const Order = lazy(() => import("./Pages/Order"));
const Purchase = lazy(() => import("./Pages/Purchase"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Items">
                <Items />
              </Route>
              <Route path="/Support">
                <Support />
              </Route>
              <Route path="/User">
                <User />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Registration">
                <Registration />
              </Route>
              <Route path="/Detail">
                <Detail />
              </Route>
              <Route path="/Cart">
                <Cart />
              </Route>
              <Route path="/Order">
                <Order />
              </Route>
              <Route path="/Purchase">
                <Purchase />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
            </Switch>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
