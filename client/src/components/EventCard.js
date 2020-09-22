import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: repeat(4, 25%);
  background-image: url(${({ imgSrc }) => imgSrc});
  /*contain vs. cover*/
  background-size: contain;
  background-repeat: no-repeat;
  width: 108px;
  height: 93px;
  border-radius: 4px;
  h2 {
    color: var(--highlight-clr-wine);
    grid-row: 3 / 4;
    grid-column: 1 / 4;
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
`;

export default function EventCard({ title, imgSrc, date }) {
  return (
    <Card imgSrc={imgSrc}>
      <DateContainer>{date}</DateContainer>
      <h2>{title}</h2>
    </Card>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
