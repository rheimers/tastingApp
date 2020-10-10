import React from "react";
import styled from "@emotion/styled";
import LogoIconSrc from "../assets/icons/logo.svg";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-top: 5rem;

  img {
    margin-right: 4rem;
    margin-bottom: 0.8rem;
  }

  h1 {
    color: var(--highlight-clr-category4);
  }

  p {
    font-family: var(--font-archivoblack);
    font-size: 1.7rem;
  }
`;
const Main = styled.div`
  margin-top: 2rem;
`;

const SplashContent1 = () => (
  <>
    <img src={LogoIconSrc} alt="Logo" />
    <h1>drinks & stories</h1>
    <Main>
      <p>offers</p>
      <p>online</p>
      <p>drinks tastings</p>
      <p>from</p>
      <p>across the world</p>
      <p>live</p>
      <p>with & without</p>
      <p>alcohol.</p>
    </Main>
  </>
);

const SplashContent2 = () => (
  <>
    <Main>
      <p>offers</p>
      <p>online</p>
      <p>drinks tastings</p>
      <p>from</p>
      <p>across the world</p>
      <p>live</p>
      <p>with & without</p>
      <p>alcohol.</p>
    </Main>
    <img src={LogoIconSrc} alt="Logo" />
    <h1>drinks & stories</h1>
  </>
);

export default function Splash({ page }) {
  return (
    <Container>
      {page === 1 ? <SplashContent1 /> : <SplashContent2 />}
    </Container>
  );
}

Splash.propTypes = {
  page: PropTypes.number.isRequired,
};
