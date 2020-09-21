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
  background: var(--contrast-color-lightgrey);
`;

const FooterIcons = styled.nav`
  padding: 1em 0.5em;
  margin: 0 1em;
  display: flex;
  justify-content: space-between;
`;

const FooterIconButton = styled.div`
  text-align: center;
  flex-basis: 0;
  img {
    margin-bottom: 5px;
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
        <FooterIconButton>
          <img src={SearchIcon} alt="Search tasting" />
          <div>Search</div>
        </FooterIconButton>

        <FooterIconButton>
          <img src={ThirstIcon} alt="Thirst for more tastings" />
          <div>Thirst</div>
        </FooterIconButton>

        <FooterIconButton>
          <img src={CalendarIcon} alt="Tasting events" />
          <div>Tastings</div>
        </FooterIconButton>

        <FooterIconButton>
          <img src={ChatIcon} alt="Chat with tasting host" />
          <div>Chat</div>
        </FooterIconButton>

        <FooterIconButton>
          <img src={ProfileIcon} alt="Personal Profile" />
          <div>Profile</div>
        </FooterIconButton>
      </FooterIcons>
    </FooterContainer>
  );
}
