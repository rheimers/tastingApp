import React from "react";
import useAsync from "../hooks/useAsync";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { getFilteredEvents } from "../api/getFilteredEvents";
import EventCard from "../components/EventCard";
import SearchPageHeader from "../components/SearchPageHeader";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 1.3rem;
`;

function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const { data: events } = useAsync(getFilteredEvents, query.get("q"));

  return (
    <Container>
      <SearchPageHeader />
      {events?.map((event) => (
        <EventCard
          category={event.category}
          key={event.id}
          id={event.id}
          title={event.title}
          date={new Date(event.date)}
          imgSrc={event.imgSrc}
        />
      ))}

      <Footer />
    </Container>
  );
}

export default SearchPage;
