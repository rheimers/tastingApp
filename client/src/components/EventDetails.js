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
        <li>
          <img src={TimeIcon} alt="date" />
          <small>{date}</small>
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
