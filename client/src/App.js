import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>drinks & stories</h1>
      <h2>taste</h2>
      <div>the world</div>
      <EventPage></EventPage>
    </>
  );
}

export default App;
