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
    margin-right: 0.3rem;
    margin-bottom: 0.8rem;
  }

  h1 {
    color: var(--highlight-clr-category4);
  }

  p {
    font-family: var(--font-archivoblack);
    font-size: 1.7rem;
  }
  span {
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  margin-top: 2rem;
`;

const Main2 = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const SplashContent1 = () => (
  <>
    <Header>
      <img src={LogoIconSrc} alt="Logo" />
      <h1>drinks & stories</h1>
    </Header>
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
    <Main2>
      <p>So make</p>
      <p>yourself </p>
      <p>comfortable</p>
      <p>at home,</p>
      <p>invite friends and</p>
      <p>travel the world</p>
      <p>with</p>
    </Main2>
    <Header>
      <img src={LogoIconSrc} alt="Logo" />
      <h1>drinks & stories</h1>
    </Header>
  </>
);

export default function SplashMain({ page }) {
  return (
    <Container>
      {page === 1 ? <SplashContent1 /> : <SplashContent2 />}
    </Container>
  );
}

SplashMain.propTypes = {
  page: PropTypes.number.isRequired,
};
