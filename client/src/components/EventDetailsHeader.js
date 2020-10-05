import React from "react";
import styled from "@emotion/styled";
import EspressoImg from "../assets/img/espresso.jpg";
import ThirstIcon from "../assets/icons/thirst.svg";
import ArrowLeftIcon from "../assets/icons/arrowleft.svg";
import ShareIcon from "../assets/icons/share.svg";

const HeaderContainer = styled.div`
  display: grid;
`;

const Header = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url(${EspressoImg});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 100%;
  height: 174px;
`;

export default function DetailsHeader() {
  return (
    <HeaderContainer>
      <Header>
        <img src={ArrowLeftIcon} alt="Arrow back" />
        <img src={ShareIcon} alt="Share" />
        <img src={ThirstIcon} alt="Thirst" />
      </Header>
    </HeaderContainer>
  );
}
