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
          --font-color-dark: #383636;
          --font-color-light: #fffdfd;
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
        }

        h1 {
          font-family: var(--font-archivoblack);
        }

        body {
          margin: 0;
          padding: 0;
          background-color: var(--font-color-dark);
        }
      `}
    />
  );
};

export default GlobalStyles;
