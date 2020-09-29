import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import EventCard from "./EventCard";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  h2 {
    margin: 0.8em 0 0.5em;
  }
`;

const ListContainerScroller = styled.div`
  width: 100%;
  overflow: auto;
`;
const ListContainer = styled.div`
  display: flex;
  & > *:not(:first-of-type) {
    margin-left: 1.2em;
  }
`;

export default function EventList({ title, events }) {
  return (
    <Container>
      <h2>{title}</h2>

      <ListContainerScroller>
        <ListContainer>
          {events?.map((item, id) => (
            <EventCard
              category={item.category}
              key={id}
              title={item.title}
              date={new Date(item.date)}
              imgSrc={item.imgSrc}
            />
          ))}
        </ListContainer>
      </ListContainerScroller>
    </Container>
  );
}

EventList.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.string.isRequired,
};
