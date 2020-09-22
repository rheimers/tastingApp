import React from "react";
import EventCard from "../components/EventCard";

export default {
  title: "EventCard",
  component: EventCard,
};

export const WineEventCard = () => (
  <EventCard
    title="Riesling with Pete"
    date={new Date("2020-09-22T15:12:23.263Z")}
    imgSrc="https://images.unsplash.com/photo-1591902318851-0073633a96a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
  />
);
export const BeerEventCard = () => (
  <EventCard
    title="Riesling with Pete"
    date={new Date("2020-10-22T15:12:23.263Z")}
    imgSrc="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
);
