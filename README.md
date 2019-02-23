# Movies <sub><sup><sub>react-app for movies</sub></sup></sub>

[![netlify status][netlify-badge]][netlify-url]

**This repo contains all the code for the [movies.vitordino.com](https://movies.vitordino.com) app.**

<sub>this project is built upon [significa/frontend-challenge](https://github.com/Significa/frontend-challenge/), all design credits go for them.</sub>

<sub>This product uses the [TMDb](https://www.themoviedb.org/) API but is not endorsed or certified by TMDb.</sub>


<br/><br/>

## Development Quick Start

> Make sure your system meets the [required dependencies and versions](#system-dependencies) before proceeding.

> Get one [themoviedb.org](https://themoviedb.org/documentation/api) API key, and set it as a environment variable named REACT_APP_TMDB_KEY (you can use a `.env.local` file for that)


```bash
# Install project dependencies
$ yarn

# Development server
$ yarn dev # starts dev server

# Build app
$ yarn build # Outputs to ./build directory
$ npx serve build # Static server for the built website
```

<br/><br/>

**Development Server Options**

To change the port set the **`PORT`** environment variable:

```bash
$ PORT=9000 yarn dev
# => starts server at http://localhost:9000
```

<br/><br/>

## Tech Stack

#### Key Front-End Packages

| name | license | description |
| :-- | :-: | :-- |
| [`react`](https://reactjs.org/) | [`MIT`](https://api.github.com/repos/facebook/react/license) | Declarative, component-based, functional aproach to user interfaces |
| [`create-react-app` `v2`](https://github.com/facebook/create-react-app) | [`MIT`](https://api.github.com/repos/facebook/create-react-app/license) | create `react` apps with no build configuration. |
| [`styled-components`](https://styled-components.com/) | [`MIT`](https://api.github.com/repos/styled-components/styled-components/license) | `css-in-js` library, composable styling |
| [`@reach/router`](https://reach.tech/router) | [`MIT`](https://api.github.com/repos/reach/router/license) | Next Generation Routing for `react` |
| [`rescripts`](https://github.com/harrysolovay/rescripts) | [`MIT`](https://api.github.com/repos/harrysolovay/rescripts/license) | Use the latest react-scripts with custom configurations for Babel, ESLint, TSLint, Webpack,... ∞ |

<br/>

<sub>This app is heavily built on react new features — eg.: `hooks`, `lazy` and `Suspense`.</sub>

<br/><br/>

#### System Dependencies

| name   | min. version |
| :----- | -----------: |
| `git`  |      `2.0.0` |
| `bash` |      `3.0.0` |
| `node` |      `8.0.0` |
| `yarn` |      `1.0.0` |


[netlify-badge]: https://api.netlify.com/api/v1/badges/0f0c902d-c82b-4963-a525-ac595b05fef3/deploy-status
[netlify-url]: https://app.netlify.com/sites/vitordino-movies/deploys
