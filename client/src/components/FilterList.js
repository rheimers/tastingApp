import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import BeerIcon from "../assets/icons/beer.svg";
import WineIcon from "../assets/icons/wine.svg";
import CoffeeTeaIcon from "../assets/icons/coffeetea.svg";
import CocktailIcon from "../assets/icons/cocktail.svg";
import SoftDrinksIcon from "../assets/icons/softdrinks.svg";

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

export default function FilterList({ title }) {
  return (
    <Container>
      <h2>{title}</h2>

      <ListContainerScroller>
        <ListContainer>
          <img src={BeerIcon} alt="Filter by beer" />
          <img src={WineIcon} alt="Filter by wine" />
          <img src={CoffeeTeaIcon} alt="Filter by coffee & tea" />
          <img src={CocktailIcon} alt="Filter by cocktail" />
          <img src={SoftDrinksIcon} alt="Filter by soft drinks" />
        </ListContainer>
      </ListContainerScroller>
    </Container>
  );
}

FilterList.propTypes = {
  title: PropTypes.string.isRequired,
};
