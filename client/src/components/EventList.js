import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import EventCard from "./EventCard";

const ListContainerScroller = styled.div`
  width: 100%;
  overflow: auto;
`;
const ListContainer = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

export default function List({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>

      <ListContainerScroller>
        <ListContainer>
          {items.map((item, index) => (
            <EventCard
              key={index}
              title={item.title}
              date={new Date(item.date)}
              imgSrc={item.imgSrc}
            />
          ))}
        </ListContainer>
      </ListContainerScroller>
    </div>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
};
