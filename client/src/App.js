import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <EventPage></EventPage>
        </Route>
        <Route path="/search"></Route>
      </Switch>
    </Router>
  );
}

export default App;
