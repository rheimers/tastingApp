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
  height: 0.01em;
  background-color: #4d4b45;
`;

const FooterIcons = styled.nav`
  padding: 1em 0.5em;
  margin: 0 1em;
  display: flex;
  justify-content: space-between;
`;

const FooterIcon = styled.div`
  text-align: center;
  flex-basis: 0;
  img {
    margin-bottom: 3px;
  }
  div {
    margin-top: 1px;
  }
  &:hover {
    background-color: orange;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterDelimitation />
      <FooterIcons>
        <FooterIcon>
          <img src={SearchIcon} alt="Search tasting" />
          <div>Search</div>
        </FooterIcon>

        <FooterIcon>
          <img src={ThirstIcon} alt="Thirst for more tastings" />
          <div>Thirst</div>
        </FooterIcon>

        <FooterIcon>
          <img src={CalendarIcon} alt="Tasting events" />
          <div>Tastings</div>
        </FooterIcon>

        <FooterIcon>
          <img src={ChatIcon} alt="Chat with tasting host" />
          <div>Chat</div>
        </FooterIcon>

        <FooterIcon>
          <img src={ProfileIcon} alt="Personal Profile" />
          <div>Profile</div>
        </FooterIcon>
      </FooterIcons>
    </FooterContainer>
  );
}
