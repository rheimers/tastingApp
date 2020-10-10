import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import EventList from "../components/EventList";
import FilterListBeverages from "../components/FilterListBeverages";
import { getEvents } from "../api/getEvents";
import useAsync from "../hooks/useAsync";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import FilterListCountry from "../components/FilterListCountry";

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

  return (
    <Container>
      <Searchbar
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSubmit={handleSubmit}
        onClear={() => setQuery("")}
      />
      <EventList title="Next tastings" events={events}></EventList>
      <EventList
        title="For your taste"
        events={events}
        category={"Mixed drinks"}
      ></EventList>
      <FilterListBeverages title="Taste by beverage"></FilterListBeverages>
      <FilterListCountry title="Taste by country"></FilterListCountry>
      <Footer></Footer>
    </Container>
  );
}

export default EventPage;
