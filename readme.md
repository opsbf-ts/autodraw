# OPSBF.TS

first preview of opsbf.ts  
My first npm package. I need to learn the config so i noticed everything

Test-Driven-Development

## used commands / dependencies

- npm i -g typescript
- npm i -g jest
- npm init
- npm install --save-dev jest
- npm install --save-dev @types/jest @types/node jest ts-jest typescript
- jest --init
- npm add --dev babel-jest @babel/core @babel/preset-env
- npm install eslint --save-dev

- npm i uuid --save
- npm install @types/uuid

## eslint settings

- How would you like to use ESLint? To check syntax, find problems, and enforce code style
- What type of modules does your project use? JavaScript modules (import/export)
- Which framework does your project use? None of these
- Does your project use TypeScript? Yes
- Where does your code run? Browser
- How would you like to define a style for your project? Use a popular style guide
- Which style guide do you want to follow? Airbnb: <https://github.com/airbnb/javascript>
- What format do you want your config file to be in? JSON
- Checking peerDependencies of eslint-config-airbnb-base@latest
- The style guide "airbnb" requires eslint@^5.16.0 || ^6.8.0. You are currently using eslint@7.1.0.
- Do you want to downgrade? Yes

## used helpers

### Install Jest

<https://jestjs.io/docs/en/getting-started>
(add babel and typescript)

### install TS-Jest now correct

<https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln>
(use the vscode-jest addon!!!)

## Module test

```ts
import Autodraw from '@opsbf/autodraw';

const autodraw = new Autodraw();
if(autodraw.test()) {
   console.log("it works");
}
```

## github / npm

planned projects

```bash
@opsbf-ts
 - autodraw
 - react-view
 - tamper-monkey-iitc-plugin
 - homepage
 - docu?
 - @types/opsbf ??? -> tsc --declaration
```
