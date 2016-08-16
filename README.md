# webpack-super
[![Build Status](https://travis-ci.org/tusharmath/webpack-super.svg?branch=master)](https://travis-ci.org/tusharmath/webpack-super)
[![npm](https://img.shields.io/npm/v/webpack-super.svg)](https://www.npmjs.com/package/webpack-super)
[![Coverage Status](https://coveralls.io/repos/github/tusharmath/webpack-super/badge.svg)](https://coveralls.io/github/tusharmath/webpack-super)
[![Donate Bitcoin](https://img.shields.io/badge/donate-bitcoin-green.svg)](https://www.coinbase.com/tusharmath)

declarative approach to creating webpack config

## Installation

```bash
npm install webpack-super --save
```

## Functions

* [appendAt(path, value, obj)](#appendAt)
* [copy(path, source, destination)](#copy) ⇒ <code>object</code>
* [setAt(path, value, obj)](#setAt) ⇒ <code>object</code>

<a name="appendAt"></a>

## appendAt(path, value, obj)
Creates a new object with the value set at the path provided and copy the rest.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | path string where the value needs to be set |
| value | <code>any</code> | the value that needs to be set |
| obj | <code>object</code> | the object that needs to be transformed |

<a name="copy"></a>

## copy(path, source, destination) ⇒ <code>object</code>
Copies a value at a `path` from `source` to `destination`

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | path string where the value needs to be picked/set |
| source | <code>object</code> | source object from where the value needs to be picked |
| destination | <code>object</code> | destination object where the value needs to be set |

**Example**  
```js
copy('a.b', {a: {b: 100}}, {p: 100}) // outputs: {a: {b: 100}, q: 100}
```
<a name="setAt"></a>

## setAt(path, value, obj) ⇒ <code>object</code>
Creates a new object with the `value` set at the `path` provided and copy the rest.

**Kind**: global function  
**Returns**: <code>object</code> - - the new object with the `value`  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | path string where the value needs to be set |
| value | <code>any</code> | the value that needs to be set |
| obj | <code>object</code> | the object that needs to be transformed |

**Example**  
```js
setAt('entry', './src/main.js', {}) // outputs: {entry: './src/main.js'}
setAt('output.filename', '[hash].bundle.js', {}) // outputs: {output: {filename: '[hash].bundle.js'}}
```
