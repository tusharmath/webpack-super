/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import R from 'ramda'

/**
 * Creates a new object with the `value` set at the `path` provided and copy the rest.
 * @function
 * @param {string} path - path string where the value needs to be set
 * @param {any} value - the value that needs to be set
 * @param {object} obj - the object that needs to be transformed
 * @returns {object} - the new object with the `value`
 * @example
 * setAt('entry', './src/main.js', {}) // outputs: {entry: './src/main.js'}
 * setAt('output.filename', '[hash].bundle.js', {}) // outputs: {output: {filename: '[hash].bundle.js'}}
 */
export const setAt = R.useWith(R.assocPath, [R.split('.'), R.identity, R.identity])
