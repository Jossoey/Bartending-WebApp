import React from "react";
import { Route, Switch } from "react-router-dom";

import AllCocktailsPage from './pages/AllCocktails';
import AboutPage from "./pages/About";
import SingleCocktailPage from "./pages/SingleCocktail";
import ErrorPage from "./pages/Error";
import Layout from "../src/components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllCocktailsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktailPage />
        </Route>
        <Route path="/*">
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
