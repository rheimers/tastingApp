import React from "react";
import styled from "@emotion/styled";
import ThirstIcon from "../assets/icons/thirst.svg";
import ArrowLeftIcon from "../assets/icons/arrowleft.svg";
import ShareIcon from "../assets/icons/share.svg";
import { Link } from "react-router-dom";
import HighlightableButton from "./HighlightableButton";
import PropTypes from "prop-types";

const Header = styled.header`
  display: grid;
  grid-template-columns: 50px auto 100px;
  grid-template-rows: repeat(4, 25%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 100%;
  height: 100%;
  min-height: 174px;

  & > .backButton {
    grid-column: 1/2;
    grid-row: 2/3;
    justify-self: center;
    margin-left: 1rem;
  }
  & > .buttonsContainer {
    grid-column: 3/4;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
    margin-top: 1rem;
  }
`;

export default function DetailsHeader({ imgSrc }) {
  return (
    <Header imgSrc={imgSrc}>
      <Link to="/" className="backButton">
        <img src={ArrowLeftIcon} alt="Arrow back" />
      </Link>

      <div className="buttonsContainer">
        <HighlightableButton>
          <img src={ShareIcon} alt="Share" />
        </HighlightableButton>

        <HighlightableButton>
          <img src={ThirstIcon} alt="Thirst" />
        </HighlightableButton>
      </div>
    </Header>
  );
}
DetailsHeader.propTypes = {
  imgSrc: PropTypes.string,
};
