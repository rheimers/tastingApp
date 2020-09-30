import React from "react";
import styled from "@emotion/styled";
import SearchIcon from "../assets/icons/searchInput.svg";
import PropTypes from "prop-types";

const InputForm = styled.form`
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

export default function Searchbar({ onSubmit, ...props }) {
  return (
    <InputForm onSubmit={onSubmit}>
      <Input placeholder="Search for any tasting" {...props} />
    </InputForm>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.string.isRequired,
};
