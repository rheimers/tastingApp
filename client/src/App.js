import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import EventPage from "./pages/EventPage";
import SearchPage from "./pages/SearchPage";
import styled from "@emotion/styled";
import EventDetailsPage from "./pages/EventDetailsPage";

const AppContainer = styled.div`
  margin-bottom: 100px;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <EventPage></EventPage>
          </Route>
          <Route path="/search">
            <SearchPage></SearchPage>
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
