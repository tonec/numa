# numa
Quick test app for converting arabic numbers to roman(latin) numerals. There's a separate api, [`numa-api`](https://github.com/tonec/numa-api), which is required for this to work correctly.

---


## Installation

Using [yarn](https://yarnpkg.com/en/):

```bash
  $ yarn install
```

## To run

```bash
  $ yarn start
```

The app should be accessible using: http://localhost:3000/ in your browser.

## Inspiration
This has been built using the boilerplate that I've been working on as part of another [`project`](https://github.com/tonec/viatorem), implementing server side rendering, DUCKS and the excellent ANT-DESIGN component library.

That project has been inspired by numerous blog-posts and boilerplate examples from around the web, particularly [`React Redux Universal Hot Example
`](https://github.com/bertho-zero/react-redux-universal-hot-example)

## Nice to haves
- The styling needs a little work still. Particularly, the error messages and the layout components need to be adjusted to be responsive. Currently, the layout breaks a little at mobile widths.
- Some better client side form validation for enforcing roman numeral chars would be nice too.
- More tests are needed.
- There may be some unused packages which should be removed.
