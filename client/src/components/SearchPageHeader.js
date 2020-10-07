import React from "react";
import PropTypes from "prop-types";
import Searchbar from "../components/Searchbar";

function SearchPageHeader(props) {
  return (
    <div>
      <Searchbar></Searchbar>
    </div>
  );
}

export default SearchPageHeader;

SearchPageHeader.propTypes = {};
