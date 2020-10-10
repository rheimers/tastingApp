import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import EventPage from "./pages/EventPage";
import SearchPage from "./pages/SearchPage";
import styled from "@emotion/styled";
import EventDetailsPage from "./pages/EventDetailsPage";
import SplashPage from "./pages/SplashPageFirst";

const AppContainer = styled.div`
  margin-bottom: 6.25rem;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/welcome">
            <SplashPage page={1} />
          </Route>
          <Route exact path="/welcome/2">
            <SplashPage page={2} />
          </Route>
          <Route exact path="/">
            <EventPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/details/:id">
            <EventDetailsPage />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
