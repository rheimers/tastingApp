import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import styled from "@emotion/styled";
import ArrowLeftSrc from "../assets/icons/arrowleft.svg";
import { useHistory } from "react-router-dom";

const Header = styled.header`
  display: flex;
`;

function SearchPageHeader() {
  const history = useHistory();
  const [query, setQuery] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search?q=${query}`);
  }
  return (
    <Header>
      <img src={ArrowLeftSrc} alt="Arrow back" />
      <Searchbar
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSubmit={handleSubmit}
        onClear={() => setQuery("")}
      />
    </Header>
  );
}

export default SearchPageHeader;

SearchPageHeader.propTypes = {};
