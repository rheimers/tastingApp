import React from "react";
import useAsync from "../hooks/useAsync";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { getFilteredEvents } from "../api/getFilteredEvents";
import EventCard from "../components/EventCard";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 0.8em;
`;

function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();

  const { data: events } = useAsync(getFilteredEvents, query.get("q"));

  return (
    <Container>
      {events?.map((item, id) => (
        <EventCard
          category={item.category}
          key={id}
          title={item.title}
          date={new Date(item.date)}
          imgSrc={item.imgSrc}
        />
      ))}

      <Footer></Footer>
    </Container>
  );
}

export default SearchPage;
