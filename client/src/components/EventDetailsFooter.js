import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  display: grid;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

const Button = styled.button`
  margin: 2.8rem;
  padding: 0.8rem 1rem 0.8rem;
  border-radius: 0.8rem;
  min-width: 284px;
  background-color: #ffa200;
  color: var(--font-color-white);
  text-transform: uppercase;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Button>Buy & Participate</Button>
    </FooterContainer>
  );
}
