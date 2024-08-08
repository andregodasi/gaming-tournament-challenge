import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --dark-blue:#334D80;
  --medium-green:#37D2A9;
  --light-purple:#B485FF;
  --medium-yellow:#FFCD05;
  --medium-orange:#DD8945;
  --light-blue:#8099E6;
  --black-blue:#111418;
  --white-color:#ffffff;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100vh;
}

body {
  -webkit-font-smoothing: antialiased;
}

#root {
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
}

body, input, button, h1, h2, h3, h4, h5, h6, strong {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}

/* BEGIN CONTAINER */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }

}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }

}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}


@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

/* END CONTAINER */

/* BEGIN CONTAINER */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.container-without-right-margin {
  width: 100%;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.container-without-left-margin {
  width: 100%;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }

  .container-without-right-margin {
    width: auto;
    margin-left: calc((100vw - 540px) / 2 - 15px);
  }

  .container-without-left-margin {
    width: auto;
    margin-right: calc((100vw - 540px) / 2 - 15px);
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }

  .container-without-right-margin {
    margin-left: calc((100vw - 720px) / 2 - 15px);
  }

  .container-without-left-margin {
    margin-right: calc((100vw - 720px) / 2 - 15px);
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }

  .container-without-right-margin {
    margin-left: calc((100vw - 960px) / 2 - 15px);
  }

  .container-without-left-margin {
    margin-right: calc((100vw - 960px) / 2 - 15px);
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }

  .container-without-right-margin {
    margin-left: calc((100vw - 1140px) / 2 - 15px);
  }

  .container-without-left-margin {
    margin-right: calc((100vw - 1140px) / 2 - 15px);
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }

  .container-without-right-margin {
    margin-left: calc((100vw - 1320px) / 2 - 15px);
  }

  .container-without-left-margin {
    margin-right: calc((100vw - 1320px) / 2 - 15px);
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* END CONTAINER */


`;
