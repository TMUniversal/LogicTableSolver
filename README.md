<h1 align="center">Logic Table Solver</h1>
<p>
  <a href="https://github.com/TMUniversal/LogicTableSolver/blob/master/LICENSE" target="_blank">
    <img alt="License: MPL--2.0" src="https://img.shields.io/github/license/TMUniversal/LogicTableSolver" />
  </a>
</p>

> Solve Logic Tables with custom sizes and claims.

## Install

Requires [Node.JS](https://nodejs.org/en/download/current/) Version >= 10

```sh
yarn install
```

## Usage

Edit `src/index.ts` to fit your use case:

`size` determines the amount of people (A, B, C...) to take into account.

`claims` is an array of functions that return either `true` or `false` when given the values of a generated logic input table.

### Claims

Claims must be a function that accepts boolean inputs in alphabetical order

```js
(a, b, c, d, e, f...) => boolean
```

To include only `b` and `d`, `a` and `c` must still be included,
but can be marked unused with a `_` (underscore).

```js
(_a, b, _c, d) => boolean
```

A claim should begin with an

```js
eq(letter, ...)
```

operand, showing that (i.e.) `A` claims _something_.

#### Examples

Example 1: A claims B is lying

```js
(a, b) => eq(a, not(b))
```

is equivalent to: `A ⇔ ¬B`

Example 2: C claims A _and_ B are lying

```js
(a, b, c) => eq(c, and(not(a), not(b)))
```

`C ⇔ (¬A ∧ ¬B)`

### Running the script

Build before you run:

```sh
yarn run build
```

```sh
yarn run start
```

## Author

👤 **TMUniversal**

* Github: [@TMUniversal](https://github.com/TMUniversal)

## 📝 License

Copyright © 2021 [TMUniversal](https://github.com/TMUniversal).<br />
This project is [MPL-2.0](https://github.com/TMUniversal/LogicTableSolver/blob/master/LICENSE) licensed.
