import React from "react";
import { Global, css } from "@emotion/core";
import ArchivoBlack from "./assets/fonts/ArchivoBlack-Regular.ttf";
import Roboto from "./assets/fonts/Roboto-Regular.ttf";
import RobotoLight from "./assets/fonts/Roboto-Light.ttf";

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
          --clr-primary: #ffa200;
          --highlight-clr-category: #fa20d8f2;
          --font-color-white: #fffdfd;
          --contrast-color-lightgrey: #dddd;
          --page-background-color: #262524;
          --contrast-dk: #34322c;
          --contrast-lt: #4d4b45;
          --font-archivoblack: "ArchivoBlack-Regular";
          --font-roboto: "Roboto-Regular";
          --font-robotolight: "Roboto-Light";
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
          @font-face {
            font-family: "Roboto-Light";
            src: url(${RobotoLight}) format("truetype");
          }
          font-family: var(--font-roboto);
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

        ::placeholder {
          font-family: var(--font-robotolight);
          size: 0.625px;
          color: var(--contrast-color-lightgrey);
        }
        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
