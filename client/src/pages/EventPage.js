import React from "react";
import Searchbar from "../components/Searchbar";
import EventList from "../components/EventList";
import FilterList from "../components/FilterList";
import { getEvents } from "../api/getEvents";
import useAsync from "../hooks/useAsync";
import Footer from "../components/Footer";

function EventPage() {
  const { data: events } = useAsync(getEvents);
  console.log(events);
  return (
    <div>
      <Searchbar></Searchbar>
      <EventList title="Next tastings" events={events}></EventList>
      <EventList title="For your taste" events={events}></EventList>
      <FilterList title="Taste by beverage"></FilterList>
      <Footer></Footer>
    </div>
  );
}

export default EventPage;
