import React from "react";
import styled from "@emotion/styled";
import SplashFooter from "../components/SplashFooter";
import SplashMain from "../components/SplashMain";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
`;

function SplashPage({ page }) {
  return (
    <Container>
      <SplashMain page={1} />
      <SplashFooter />
    </Container>
  );
}

export default SplashPage;

SplashPage.propTypes = {
  page: PropTypes.number.isRequired,
};
