import React from "react";
import styled from "@emotion/styled";
import Progress1Src from "../assets/icons/progress1.svg";
import ArrowRightSrc from "../assets/icons/arrowright.svg";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
`;

const FooterIcons = styled.nav`
  padding: 1em 0.5em;
  margin: 0 1.5em;
  display: flex;
  justify-content: space-between;
`;

const FooterIcon = styled.div`
  img {
    margin-bottom: 0.3rem;
  }
  div {
    margin-top: 0.5rem;
  }
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <FooterIcons>
        <FooterIcon>
          <img src={Progress1Src} alt="Progressbar 1" />
        </FooterIcon>

        <FooterIcon>
          <Link to="/">
            <img src={ArrowRightSrc} alt="Arrow next" />
          </Link>
        </FooterIcon>
      </FooterIcons>
    </FooterContainer>
  );
}
