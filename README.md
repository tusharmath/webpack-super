# webpack-super

[![Greenkeeper badge](https://badges.greenkeeper.io/tusharmath/webpack-super.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/tusharmath/webpack-super.svg?branch=master)](https://travis-ci.org/tusharmath/webpack-super)
[![npm](https://img.shields.io/npm/v/webpack-super.svg)](https://www.npmjs.com/package/webpack-super)
[![Coverage Status](https://coveralls.io/repos/github/tusharmath/webpack-super/badge.svg)](https://coveralls.io/github/tusharmath/webpack-super)
[![Donate Bitcoin](https://img.shields.io/badge/donate-bitcoin-green.svg)](https://www.coinbase.com/tusharmath)

a functional approach to writing webpack configs

## Installation

```bash
npm install webpack-super --save
```

## Functions

* [appendAt(path, value, obj)](#appendAt) ⇒ <code>object</code>
* [compose(...funcs)](#compose) ⇒ <code>function</code>
* [copy(path, source, destination)](#copy) ⇒ <code>object</code>
* [setAt(path, value, obj)](#setAt) ⇒ <code>object</code>
* [when(condition, func)](#when) ⇒ <code>function</code>

<a name="appendAt"></a>

## appendAt(path, value, obj) ⇒ <code>object</code>
Creates a new object with the value set at the path provided and copy the rest.

**Kind**: global function  
**Implements:** <code>Transformer</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | path string where the value needs to be set |
| value | <code>any</code> | the value that needs to be set |
| obj | <code>object</code> | the object that needs to be transformed |

<a name="compose"></a>

## compose(...funcs) ⇒ <code>function</code>
Creates a composition factory functions

**Kind**: global function  
**Implements:** <code>Helper</code>  

| Param | Type | Description |
| --- | --- | --- |
| ...funcs | <code>function</code> | factory functions |

<a name="copy"></a>

## copy(path, source, destination) ⇒ <code>object</code>
Copies a value at a `path` from `source` to `destination`

**Kind**: global function  
**Implements:** <code>Transformer</code>  

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
**Implements:** <code>Transformer</code>  
**Returns**: <code>object</code> - the new object with the `value`  

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
<a name="when"></a>

## when(condition, func) ⇒ <code>function</code>
Returns a new function that is either has no effect (identity) or
or has the same as the passed `func` based on the `condition`.

**Kind**: global function  
**Implements:** <code>Transformer</code>  

| Param | Type | Description |
| --- | --- | --- |
| condition | <code>boolean</code> | the condition |
| func | <code>function</code> | the function to be called |

