import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: repeat(3, calc(100% / 3));
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 108px;
  height: 93px;
  border-radius: 4px;
  h2 {
    color: var(--highlight-clr-wine);
    grid-row: 3;
    grid-column: 1 / 3;
    font-size: 12px;
  }
`;

const DateContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: white;
  border-radius: 4px;
  text-align: center;
  color: var(--clr-primary);
  margin: 4px;
  font-size: 33%;
`;
const days = ["Mo", "Tu", "Wed", "Thu", "Fr", "Sat", "Sun"];
const months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "June",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
export default function EventCard({ title, imgSrc, date }) {
  return (
    <Card imgSrc={imgSrc}>
      <DateContainer>
        <div>{days[date.getDay()]}</div>
        <div>{date.getDate()}</div>
        <div>{months[date.getMonth()]}</div>
      </DateContainer>
      <h2>{title}</h2>
    </Card>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
