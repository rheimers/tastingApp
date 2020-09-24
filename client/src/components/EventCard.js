import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 45%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${({ imgSrc }) => imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 108px;
  height: 93px;
  border-radius: 12px;
  h2 {
    color: var(--highlight-clr-category);
    grid-row: 3;
    grid-column: 1 / 5;
    font-family: var(--font-archivoblack);
    font-size: 12px;
    margin: 5px;
  }
`;

const DateContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: white;
  border-radius: 2px;
  text-align: center;
  color: var(--clr-primary);
  margin: 4px;
  font-size: 50%;
  padding: 1px;
  div:first-of-type {
    color: var(--contrast-dk);
    text-transform: uppercase;
  }
  div:nth-of-type(2) {
    font-size: 12px;
  }
  div:nth-of-type(3) {
    text-transform: uppercase;
  }
`;
const days = ["Sun", "Mon", "Tu", "Wed", "Thu", "Fr", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
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
