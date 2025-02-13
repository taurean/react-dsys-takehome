# Design Systems interview project

The request was to take a messy figma file and:
- clean up the [Figma Link](https://www.figma.com/design/ODC2jOSyE1QahawF2FQ4LX/React-design-system-takehome?node-id=1-85&p=f&t=4IP12rsEXkF7yS90-0)
- establish a simple design system in figma
- create a simple one-page static react page using the same design system established in figma

---

# React + TypeScript + Vite

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fcbf1a3-1387-42dd-baea-d18819d8ae47/deploy-status)](https://app.netlify.com/sites/aquamarine-flan-f28265/deploys)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
