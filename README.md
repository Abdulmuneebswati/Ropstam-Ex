## Package Manager

The preferred package manager is [pnpm](https://npm.io/). Do not use any other package manager.

## Installation

```bash
npm install
```

#### NOTE: IF YOU WANT TO INSTALL ANY ADDITIONAL PACKAGE YOU MUST NAVIGATE TO THE SPECIFIC APP AND INSTALL IT THERE. KEEP THE VERSION CONSISTENT ACROSS ALL APPS

```bash
npm add <package-name>
```

## Adding components

To add components to your app, run the following command at the root of your  app:

```bash
npm install
```

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

```jsx
import { Button } from '@workspace/ui/components/button';
```

## Environment Variables

Each app has its own environment variables. In order to run the apps in development mode, you must set the environment variables in the **.env** file.

## Eslint and Prettier

- This project uses [Eslint](https://eslint.org/)
- Common Eslint Config are being used for all apps, please refer to the [eslint-config](https://github.com/CoreViva/coreviva-fe/blob/28cd4102cd73fdd4d1f31869dd5319a7c6719d71/packages/eslint-config/index.js)

## Linting

```bash
npm lint
```

## Building

```bash
npm build
```
