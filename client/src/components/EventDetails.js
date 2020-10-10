import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import LanguageIcon from "../assets/icons/language.svg";
import PriceIcon from "../assets/icons/pricetag.svg";
import TimeIcon from "../assets/icons/time.svg";
import CountryIcon from "../assets/icons/country.svg";
import CategoryIcon from "../assets/icons/beveragetype.svg";
import TastingPackageIcon from "../assets/icons/tastingpackage.svg";

const EventDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;

  h2 {
    margin: 0.8rem 1rem 0.5rem;
    color: ${(props) => {
      switch (props.category) {
        case "Wine":
          return "var(--highlight-clr-category1)";
        case "Coffee & Tea":
          return "var(--highlight-clr-category2)";
        case "Beer":
          return "var(--highlight-clr-category3)";
        case "Mixed drinks":
          return "var(--highlight-clr-category4)";
        case "Soft drinks":
          return "var(--highlight-clr-category5)";

        default:
          return "var(--font-color-white)";
      }
    }};
  }
`;

const EventDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-inline-start: 0.8rem;
  list-style: none;
  margin: 1rem;
  img {
    background: var(--contrast-dk);
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 0.5rem;
  }
  small {
    margin: 0 0.2rem 0 1.5rem;
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

function EventDetails({
  title,
  date,
  country,
  category,
  language,
  price,
  tastingpackage,
}) {
  return (
    <EventDetailsContainer category={category}>
      <h2>{title}</h2>
      <EventDetailsList>
        <li>
          <img src={TimeIcon} alt="date" />
          <small>
            <span>{days[date.getDay()]}, </span>
            <span>{date.getDate()} </span>
            <span> {months[date.getMonth()]}, </span>
            <span> {date.getHours()} pm CEST</span>
          </small>
        </li>
        <li>
          <img src={CountryIcon} alt="country" />
          <small>{country}</small>
        </li>
        <li>
          <img src={CategoryIcon} alt="category" />
          <small>{category}</small>
        </li>
        <li>
          <img src={TastingPackageIcon} alt="tastingpackage" />
          <small>{tastingpackage}</small>
        </li>
        <li>
          <img src={PriceIcon} alt="price" />
          <small>{price}</small>
        </li>
        <li>
          <img src={LanguageIcon} alt="language" />
          <small>{language}</small>
        </li>
      </EventDetailsList>
    </EventDetailsContainer>
  );
}

export default EventDetails;

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  tastingpackage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
