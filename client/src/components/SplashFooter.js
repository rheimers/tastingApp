import React from "react";
import styled from "@emotion/styled";
import Progress1Src from "../assets/icons/progress1.svg";
import Progress2Src from "../assets/icons/progress2.svg";
import ArrowRightSrc from "../assets/icons/arrowright.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

const Footer1 = () => (
  <>
    <FooterIcons>
      <FooterIcon>
        <img src={Progress1Src} alt="Progressbar 1" />
      </FooterIcon>
      <FooterIcon>
        <img src={ArrowRightSrc} alt="Arrow next" />
      </FooterIcon>
    </FooterIcons>
  </>
);

const Footer2 = () => (
  <>
    <FooterIcons>
      <FooterIcon>
        <img src={Progress2Src} alt="Progressbar 2" />
      </FooterIcon>
      <FooterIcon>
        <img src={ArrowRightSrc} alt="Arrow next" />
      </FooterIcon>
    </FooterIcons>
  </>
);

export default function Footer({ page }) {
  return (
    <FooterContainer>
      {page === 1 ? (
        <Link to="/welcome/2">
          {" "}
          <Footer1 />
        </Link>
      ) : (
        <Link to="/">
          <Footer2 />
        </Link>
      )}
    </FooterContainer>
  );
}

Footer.propTypes = {
  page: PropTypes.string,
};
