import React from "react";
import styled from "@emotion/styled";
import SearchIcon from "../assets/icons/searchInput2.svg";
import PropTypes from "prop-types";
import CancelIcon from "../assets/icons/cancel.svg";

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input = styled.input`
  margin: 2.6rem;
  padding: 0.8rem 1rem 0.8rem 50px;
  border: 1px solid #dddddd;
  border-radius: 11px;
  min-width: 284px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 0.75rem 0.625rem;
  font: var(--font-robotolight);
`;

const ClearButton = styled.div`
  position: absolute;
  top: 3.4rem;
  right: 3.8rem;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default function Searchbar({ onSubmit, onClear, ...props }) {
  const handleClear = (event) => {
    event.preventDefault();
    onClear();
  };
  return (
    <InputForm onSubmit={onSubmit}>
      <Input placeholder="Search for any tasting" {...props} />
      <ClearButton onClick={handleClear}>
        <img src={CancelIcon} alt="Cancel" />
      </ClearButton>
    </InputForm>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.string.isRequired,
  onClear: PropTypes.string.isRequired,
};
