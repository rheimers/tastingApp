import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function HighlightableButton({ children, className }) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      className={`${className} ${clicked ? "active" : ""}`}
      onClick={() => setClicked(true)}
    >
      {children}
    </button>
  );
}

const StyledHighlightableButton = styled(HighlightableButton)`
  background: transparent;
  border: none;
  &.active {
    background: var(--clr-primary);
  }
  &:focus {
    outline: none;
  }
`;

export default StyledHighlightableButton;
HighlightableButton.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};
