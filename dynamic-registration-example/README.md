# Dynamic registration example

Proof of concept exploring the usage of microfrontends for Nintex Promapp with dynamic registration.

## Requirements

- All of the [requirements for the basic example](/basic-example/README.md#requirements) ✅
- Microfrontends are registered dynamically, through a separately hosted [json manifest](/dynamic-registration-example/packages/registration-service/public/registrations.json) ✅
- Cross micro routing is loosely coupled, with the navigation function provided by the host application. Micros self provide what actions and routes they can handle on registration. ✅

## Technical overview

- `remotes` are not statically defined in the shell application's [webpack.config.js](/dynamic-registration-example/packages/shell/webpack.config.js). The shell application does not know anything about what microfrontends exist, or what routes they are active on, at runtime.
- Microfrontend registration occurs at runtime, when the shell application queries the list of microfrontends, their urls, active routes and other metadata, from the separate json store.
- The webpack module federation low level API - see [RemoteComponent.tsx](/dynamic-registration-example/packages/shell/src/RemoteComponent.tsx) - is used to dynamically load the federated modules at runtime, based on the json config.
- Microfrontends register the routing actions they can handle (e.g. `HOME`, `VIEW_SINGLE_PROCESS`) at runtime, and a generic `navigate(name, params)` function is provided by the host, to abstract the details of forming urls to access other microfrontends.

## Local development

- All packages involved are managed with lerna, so just running the following commands in the [dynamic-registration-example](/dynamic-registration-example/) will suffice.
- `npm i` to install dependencies
- `npm run dev` to run in watch mode
- OR
- `npm run start` to build and serve production bundles
- visit [localhost:3000](http://localhost:3000)

## Areas not yet covered

- CSS scoping (shouldn't be too bad, just use css modules or css-in-js)
- Unmounting css on microfrontend unmount (add identifiers to style tags, delete from the document on unmount?)

## Screenshots

![home](/dynamic-registration-example/docs/home.png)
