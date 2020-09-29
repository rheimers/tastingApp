import React, { useState } from "react";
import styled from "@emotion/styled";
import SearchIcon from "../assets/icons/searchInput.svg";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  margin: 45px;
  padding: 0.8rem 1rem 0.8rem 50px;
  border: 1px solid #dddddd;
  border-radius: 11px;
  min-width: 284px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 8px 7px;
  font: var(--font-robotolight);
`;

export default function Searchbar() {
  const [value, setValue] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("search form submitted.");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputContainer>
        <Input placeholder="Search for any tasting" />
        <input type="submit" style={{ display: "none" }} />
      </InputContainer>
    </form>
  );
}
