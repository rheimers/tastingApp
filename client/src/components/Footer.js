import React from "react";
import styled from "@emotion/styled";
import SearchIcon from "../assets/icons/search.svg";
import ThirstIcon from "../assets/icons/thirst.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import ChatIcon from "../assets/icons/chat.svg";
import ProfileIcon from "../assets/icons/profile.svg";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: var(--contrast-color-anthracite);
`;

const FooterDelimitation = styled.div`
  height: 0.1em;
  background: var(--contrast-color-lightgrey);
`;

const FooterIcons = styled.nav`
  padding: 1em 0.5em;
  margin: 0 1em;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterDelimitation />
      <FooterIcons>
        <img src={SearchIcon} alt="Search tasting" />
        <div>Search</div>

        <img src={ThirstIcon} alt="Thirst for more tastings" />
        <div>Thirst</div>

        <img src={CalendarIcon} alt="Tasting events" />
        <div>Tastings</div>

        <img src={ChatIcon} alt="Chat with tasting host" />
        <div>Chat</div>

        <img src={ProfileIcon} alt="Personal Profile" />
        <div>Profile</div>
      </FooterIcons>
    </FooterContainer>
  );
}
