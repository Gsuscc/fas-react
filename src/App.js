import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { GeneralContext } from "./context/SearchGeneral";
import { ErrorState } from "./context/ErrorContext";
import ErrorModal from "./components/ui/ErrorModal";
import ResultPage from "./components/search_result/ResultPage";
import MyFlights from "./components/myflights/MyFlights";
import MyCities from "./components/myCities/MyCities"

function App() {
  const { error, clearError } = useContext(ErrorState);
  return (
    <React.Fragment>
      <GeneralContext>
        <Router>
          {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/search">
              <ResultPage />
            </Route>
            <Route path="/myflights">
              <MyFlights />
            </Route>
            <Route path="/mycities">
              <MyCities />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </GeneralContext>
    </React.Fragment>
  );
}

export default App;
