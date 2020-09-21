import React from "react";
import styled from "@emotion/styled";
import SearchIcon from "../assets/icons/search.svg";
import ThirstIcon from "../assets/icons/thirst.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import ChatIcon from "../assets/icons/chat.svg";
import ProfileIcon from "../assets/icons/profile.svg";

const FooterContainer = styled.footer`
  display: grid;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: #fff;
`;

const FooterDelimitation = styled.div`
  height: 0.4em;
  background: var(--bg-main-gradient);
`;

const FooterIcons = styled.nav`
  padding: 0.7em 0.2em;
  display: flex;
  margin: 0 1em;
  justify-content: space-between;
  & > a {
    display: flex;
    align-items: center;
    padding: 0.7em;
  }
  & > a > img {
    height: 1em;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterDelimitation />
      <FooterIcons>
        <img src={SearchIcon} alt="Search tasting" />

        <img src={ThirstIcon} alt="Thirst for more tastings" />

        <img src={CalendarIcon} alt="Tasting events" />

        <img src={ChatIcon} alt="Chat with tasting host" />

        <img src={ProfileIcon} alt="Personal Profile" />
      </FooterIcons>
    </FooterContainer>
  );
}
