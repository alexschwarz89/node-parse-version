# parse-version

Simply parse string like `4.5.6.7` into javascript object like `{ major: 4, minor: 5, patch: 6, build: 7 }`.

## Install

```sh
$ npm install --save parse-version
```

## Quickstart

```js
var parseVersion = require('parse-version');
var version = parseVersion('2.5.6.7'); // { major: 2, minor: 5, patch: 6, build: 7 }
```

## Copyright and license

MIT © [Aloïs Deniel](http://aloisdeniel.github.io)