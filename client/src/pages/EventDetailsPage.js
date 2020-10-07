import React from "react";
import PropTypes from "prop-types";
import EventDetailsHeader from "../components/EventDetailsHeader";
import EventDetails from "../components/EventDetails";
import EventDetailsFooter from "../components/EventDetailsFooter";
import { getEvent } from "../api/getEvent";
import useAsync from "../hooks/useAsync";
import { useParams } from "react-router-dom";

EventDetailsPage.propTypes = {};

function EventDetailsPage() {
  const { id } = useParams();
  const { data: event } = useAsync(getEvent, id);
  return (
    <div>
      <EventDetailsHeader imgSrc={event?.imgSrc} />
      {event && (
        <EventDetails
          title={event.title}
          date={event.date}
          country={event.country}
          category={event.category}
          language={event.language}
          tastingpackage={event.tastingpackage}
          price={event.price}
        ></EventDetails>
      )}
      <EventDetailsFooter></EventDetailsFooter>
    </div>
  );
}

export default EventDetailsPage;

EventDetailsPage.propTypes = {
  id: PropTypes.string.isRequired,
};
