import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { SearchContext } from "./context/SearchContext";

function App() {
  return (
    <React.Fragment>
      <SearchContext>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </SearchContext>
    </React.Fragment>
  );
}

export default App;
