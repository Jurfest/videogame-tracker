# VideogameTracker

<h1 align="center">
  <img alt="Videogames Catalog Application" src="./src/assets/img/logo.png" width="250px"/>
    <br>
</h1>

<h4 align="center">
  Angular 13 website that helps to keep track of games 
</h4>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/Jurfest/videogame-tracker">
<img alt="Made by Jurfest" src="https://img.shields.io/badge/made%20by-Jurfest-%20">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/Jurfest/videogame-tracker">
<img alt="GitHub license" src="https://img.shields.io/github/license/Jurfest/videogame-tracker">
</p>

<p align="center">
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installing-the-application">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
</p>
<br><br>

### :computer: Technologies

This project was developed with the following technologies:

- [Angular](https://angular.io)
- [NgRx](https://angular.io)
- [RxJS](https://angular.io)
- [TypeScript](https://www.typescriptlang.org)
- [HTML](https://www.w3.org)
- [SCSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [Nx](https://angular.io)
- [json-server](https://github.com/typicode/json-server)

### Installing the Application

Clone the repository and install the dependencies.

```bash

#install dependencies
$ npx yarn

```

### Running the application

```bash
#serve frontend
$ yarn start

#running server (json-server)
$ yarn run server
```

The application will run on port 4200 and the browser will open automatically:

<p>http://localhost:4200</p>

### Running unit tests

```bash
#run jest
$ npx jest

```

### Notes

<p>Session Storage for user login was not implemetend.</p>
<p>For that reason reloading the page will cause the user to be logged out</p>

<!-- ### Preview -->

<!-- <h1 align="center">
    <img alt="" src="./src/assets/img/home.png" width="940px"/>
</h1>
<h1 align="center">
    <img alt="" src="./src/assets/img/products.png" width="940px"/>
</h1> -->

<!-- ### :page_facing_up: License

This project is under the MIT license.

### :mailbox_with_mail: Get in touch!

[LinkedIn](https://www.linkedin.com/in/diegojurfest/) -->

### Frontend aditional information

This project was generated using [Nx](https://nx.dev) and Angular 13.

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@videogame-tracker/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

### Thats it ! :wave:

---

by Diego Jurfest :tada:
