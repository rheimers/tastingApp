import React from "react";
import styled from "@emotion/styled";

const MainContainer = styled.footer`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: var(--contrast-dk);
`;

export default function Footer() {
  return <MainContainer></MainContainer>;
}
