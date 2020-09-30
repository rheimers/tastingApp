import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import EventList from "../components/EventList";
import FilterList from "../components/FilterList";
import { getEvents } from "../api/getEvents";
import useAsync from "../hooks/useAsync";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 0.8em;
`;

function EventPage() {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const { data: events } = useAsync(getEvents);
  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search?q=${query}`);
  }
  // const filteredEvents = (events, query) => {
  //   return events.filter(
  //     (event) => event.toLowerCase().indexOf(query.toLowerCase()) > -1
  //   );
  // };
  return (
    <Container>
      <Searchbar
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSubmit={handleSubmit}
      ></Searchbar>
      <EventList title="Next tastings" events={events}></EventList>
      <EventList title="For your taste" events={events}></EventList>
      <FilterList title="Taste by beverage"></FilterList>
      <Footer></Footer>
    </Container>
  );
}

export default EventPage;
