import React from "react";
import Searchbar from "../components/Searchbar";
import List from "../components/EventList";

function EventPage(props) {
  return (
    <div>
      <Searchbar></Searchbar>
      <List></List>
    </div>
  );
}

export default EventPage;
