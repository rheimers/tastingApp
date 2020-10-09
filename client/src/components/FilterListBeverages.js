import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import BeerIcon from "../assets/icons/beer.svg";
import WineIcon from "../assets/icons/wine.svg";
import CoffeeTeaIcon from "../assets/icons/coffeetea.svg";
import MixedDrinksIcon from "../assets/icons/mixeddrinks.svg";
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

const IconContainer = styled.div`
  img {
    background: var(--contrast-dk);
    padding: 10px;
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
`;

export default function FilterListBeverages({ title }) {
  return (
    <Container>
      <h2>{title}</h2>

      <ListContainerScroller>
        <ListContainer>
          <IconContainer>
            <img src={BeerIcon} alt="Filter by beer" />
          </IconContainer>
          <IconContainer>
            <img src={WineIcon} alt="Filter by wine" />
          </IconContainer>
          <IconContainer>
            <img src={CoffeeTeaIcon} alt="Filter by coffee & tea" />
          </IconContainer>
          <IconContainer>
            <img src={MixedDrinksIcon} alt="Filter by cocktail" />
          </IconContainer>
          <IconContainer>
            <img src={SoftDrinksIcon} alt="Filter by soft drinks" />
          </IconContainer>
        </ListContainer>
      </ListContainerScroller>
    </Container>
  );
}

FilterListBeverages.propTypes = {
  title: PropTypes.string.isRequired,
};
