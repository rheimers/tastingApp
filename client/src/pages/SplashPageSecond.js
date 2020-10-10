import React from "react";
import styled from "@emotion/styled";
import SplashFooter from "../components/SplashFooter";
import SplashMain from "../components/SplashMain";

const Container = styled.div`
  display: flex;
`;

function SplashPage() {
  return (
    <Container>
      <SplashMain />
      <SplashFooter />
    </Container>
  );
}

export default SplashPage;
