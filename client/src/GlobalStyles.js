import React from "react";
import { Global, css } from "@emotion/core";
import ArchivoBlack from "./assets/fonts/ArchivoBlack-Regular.ttf";
import Roboto from "./assets/fonts/Roboto-Regular.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          margin: 0;
        }
        :root {
          --font-color-orange: #ffa200;
          --font-color-white: #fffdfd;
          --page-background-color: #262524;
          --contrast-color-anthracite: #34322c;
          --font-archivoblack: "ArchivoBlack-Regular";
          --font-roboto: "Roboto-Regular";
        }

        html {
          @font-face {
            font-family: "ArchivoBlack";
            src: url(${ArchivoBlack}) format("truetype");
          }
          @font-face {
            font-family: "Roboto";
            src: url(${Roboto}) format("truetype");
          }
          font-family: "Roboto";
          height: 100vh;
          width: 100vw;
          background-color: var(--page-background-color);
          color: var(--font-color-white);
        }

        h1 {
          font-family: var(--font-archivoblack);
          color: var(--font-color-orange);
          font-size: 1.875rem;
        }

        h2 {
          font-family: var(--font-archivoblack);
          color: var(--font-color-white);
          font-size: 1.25rem;
        }

        body {
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
