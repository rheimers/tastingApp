import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <EventPage></EventPage>
    </Router>
  );
}

export default App;
