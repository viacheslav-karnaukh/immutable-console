# Logger for Immutable.js
[![build status](https://img.shields.io/travis/viacheslav-karnaukh/immutable-console/master.svg?style=flat-square)](https://travis-ci.org/viacheslav-karnaukh/immutable-console)
[![npm version](https://img.shields.io/npm/v/immutable-console.svg?style=flat-square)](https://www.npmjs.com/package/immutable-console)
[![license: MIT](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](https://github.com/viacheslav-karnaukh/immutable-console/blob/master/LICENSE)

Debugging utility for human readable printing of Immutable.js data structures.

## Installation
Using npm
```
npm i immutable-console -D
```
Using yarn
```
yarn add immutable-console -D
```

## Usage
Logger utility can be used as-is to show Immutable.js data structures in human readable format or with `redux-logger` middleware for Redux.

### AS-IS example
```js
import { List, Map } from 'immutable';
import immutableConsole from 'immutable-console';

const user = Map({
  id: '42',
  name: 'John Doe'
});

immutableConsole.log(user); // {id: '42', name: 'John Doe'}
console.log(user); // {size: 2, __altered: false, __hash: undefined, __ownerID: undefined, _root: {ownerID: f, entries: Array(2)}, length: 2}
```

### redux-logger example
```js
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import immutableConsole from 'immutable-console';

const logger = createLogger({
  logger: immutableConsole
});

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```
## License
MIT
