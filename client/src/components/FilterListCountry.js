import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

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
  div:first-of-type {
    color: var(--highlight-clr-category1);
  }
  div:nth-of-type(2) {
    color: var(--highlight-clr-category2);
  }
  div:nth-of-type(3) {
    color: var(--highlight-clr-category3);
  }
  div:nth-of-type(4) {
    color: var(--highlight-clr-category4);
  }
  div:nth-of-type(5) {
    color: var(--highlight-clr-category5);
  }
`;

const CountryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--contrast-dk);
  padding: 10px;
  min-width: 90px;
  height: 80px;
  border-radius: 10px;
  first-of-type {
    font: var(--highlight-clr-category1);
  }
`;

export default function FilterListCountry({ title }) {
  return (
    <Container>
      <h2>{title}</h2>

      <ListContainerScroller>
        <ListContainer>
          <CountryContainer>Australia</CountryContainer>
          <CountryContainer>Belgium</CountryContainer>
          <CountryContainer>Colombia</CountryContainer>
          <CountryContainer>France</CountryContainer>
          <CountryContainer>Spain</CountryContainer>
        </ListContainer>
      </ListContainerScroller>
    </Container>
  );
}

FilterListCountry.propTypes = {
  title: PropTypes.string.isRequired,
};
