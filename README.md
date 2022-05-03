# Vite Lit Element TS SASS

This is an example [Vite](https://vitejs.dev/) project using [Lit 2](https://lit.dev), Typescript, and `rollup-plugin-minify-html-literals` to minify Lit Templates and CSS.

## Changes from Vite's TS Lit template

* Added the [`rollup-plugin-minify-html-literals`](https://www.npmjs.com/package/rollup-plugin-minify-html-literals) plugin to `vite.config.ts`
* Added `src/my-css-file.css`
* Imported the above file with the `?raw` query parameter
* Applied the above styles with Lit's `unsafeCSS` function
