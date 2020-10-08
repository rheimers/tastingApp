import React from "react";
import Searchbar from "../components/Searchbar";
import styled from "@emotion/styled";
import ArrowLeft from "../assets/icons/arrowleft.svg";
import CancelIcon from "../assets/icons/cancel.svg";

const Header = styled.header`
  display: flex;
`;

function SearchPageHeader() {
  return (
    <Header>
      <img src={ArrowLeft} alt="Arrow back" />
      <Searchbar></Searchbar>
      <img src={CancelIcon} alt="Cancel" />
    </Header>
  );
}

export default SearchPageHeader;
