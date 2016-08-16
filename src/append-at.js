/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import R from 'ramda'

const __lensPathAsStr = R.compose(R.lensPath, R.split('.'))

/**
 * Creates a new object with the value set at the path provided and copy the rest.
 * @function
 * @param {string} path - path string where the value needs to be set
 * @param {any} value - the value that needs to be set
 * @param {object} obj - the object that needs to be transformed
 */
export const appendAt = R.useWith(R.over, [__lensPathAsStr, R.append, R.identity])
