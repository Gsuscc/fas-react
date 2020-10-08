import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { GeneralContext } from "./context/SearchGeneral";

function App() {
  return (
    <React.Fragment>
      <GeneralContext>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </GeneralContext>
    </React.Fragment>
  );
}

export default App;
