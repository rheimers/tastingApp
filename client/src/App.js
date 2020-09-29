import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <EventPage></EventPage>
    </>
  );
}

export default App;
