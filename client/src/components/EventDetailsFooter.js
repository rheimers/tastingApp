import React from "react";
import styled from "@emotion/styled";
import Button from "./Button.js";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Button>Buy & Participate</Button>
    </FooterContainer>
  );
}
