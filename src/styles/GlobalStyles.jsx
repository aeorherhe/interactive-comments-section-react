import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --box-shadow: 0 0 20px hsl(150, 100%, 66%);
  --box-shadow-2: 0px 0px 50px rgba(150, 150, 150, 0.3);
  --transition: all 0.3s linear;
  --transition2: all 0.5s linear;
  --border-radius: 0.5rem;
  --border-radius-2: 1rem;
  --line: 2px solid #d6d9e6;
  --line-2: 2px solid rgb(28, 28, 192);
  --line-3: 2px solid rgb(9, 224, 88);

  /* variables for this project */
  --White: #ffffff;
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);

    /* colors from the design */
--Moderate-blue: hsl(238, 40%, 52%);
--Soft-red: hsl(358, 79%, 66%);
--Light-grayish-blue: hsl(239, 57%, 85%);
--Pale-red: hsl(357, 100%, 86%);
--Dark-blue: hsl(212, 24%, 26%);
--Grayish-blue: hsl(211, 10%, 45%);
--Light-gray: hsl(223, 19%, 93%);
--Very-light-gray: hsl(228, 33%, 97%);

}

body {
  display: grid;
  font-family: "Rubik", "Open Sans", Arial, Helvetica, sans-serif;
}

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.5rem;
    }
  }

  .btn {
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 700;
    color: var(--Moderate-blue);
    /* letter-spacing: 0.1rem; */
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform:capitalize;
  }

`;

export default GlobalStyles;
