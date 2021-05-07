import { createGlobalStyle } from 'styled-components';

import colors from '../main/colors';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Open Sans;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

// Typography

h1 {
  font-weight: 600;
  font-size: 46px;
  color:${colors.textColorBlack}; 
}

h2 {
  font-size: 38px;
  font-weight: 500;
  color:${colors.primary};

  /* font-size: 46px; */
}

h3 {
  font-size: 32px;
  font-weight: 500;
  color:${colors.primary};
}

h4 {
  color:${colors.textColorBlack}; 

}

p {
  font-size:16px;
  color:${colors.textColorBlack}; 

}



// Buttons

button {
  cursor: pointer;
  outline: none;
  font-size: 16px;
  text-align: justify;
  color:${colors.white};


  
  &:hover {
          opacity: 0.88 !important;
        }
  
}`;
