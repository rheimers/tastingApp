import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import LanguageIcon from "../assets/icons/language.svg";
import PriceIcon from "../assets/icons/pricetag.svg";
import TimeIcon from "../assets/icons/time.svg";
import CountryIcon from "../assets/icons/country.svg";
import CategoryIcon from "../assets/icons/beveragetype.svg";
import TastingPackageIcon from "../assets/icons/tastingpackage.svg";

const EventDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  li:nth-of-type(1) {
    list-style-image: url(${TimeIcon});
  }
  li:nth-of-type(2) {
    list-style-image: url(${CountryIcon});
  }
  li:nth-of-type(3) {
    list-style-image: url(${CategoryIcon});
  }
  li:nth-of-type(4) {
    list-style-image: url(${LanguageIcon});
  }
  li:nth-of-type(5) {
    list-style-image: url(${TastingPackageIcon});
  }
  li:nth-of-type(6) {
    list-style-image: url(${PriceIcon});
  }
  list-style: none;
  margin: 1rem;
`;

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
    <div>
      <h2>{title}</h2>
      <EventDetailsList>
        <li>{date}</li>
        <li>{country}</li>
        <li>{category}</li>
        <li>{language}</li>
        <li>{tastingpackage}</li>
        <li>{price}</li>
      </EventDetailsList>
    </div>
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
