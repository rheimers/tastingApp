import React from "react";
import styled from "@emotion/styled";
import EspressoImg from "../assets/img/espresso.jpg";
import ThirstIcon from "../assets/icons/thirst.svg";
import ArrowLeftIcon from "../assets/icons/arrowleft.svg";
import ShareIcon from "../assets/icons/share.svg";

const Header = styled.header`
  display: grid;
  grid-template-columns: 50px auto 50px 50px;
  grid-template-rows: repeat(4, 25%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url(${EspressoImg});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 100%;
  height: 100%;
  min-height: 174px;

  img:first-of-type {
    grid-column: 1/2;
    grid-row: 2/3;
    justify-self: center;
  }
  img:nth-of-type(2) {
    grid-column: 3/4;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
  }
  img:nth-of-type(3) {
    grid-column: 4/5;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
  }
`;

export default function DetailsHeader() {
  return (
    <Header>
      <img src={ArrowLeftIcon} alt="Arrow back" />

      <img src={ShareIcon} alt="Share" />
      <img src={ThirstIcon} alt="Thirst" />
    </Header>
  );
}
