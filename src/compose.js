/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import R from 'ramda'

/**
 * Creates a composition factory functions
 * @implements Helper
 * @function
 * @param {...function} funcs - factory functions
 * @return {function}
 */
export const compose = R.compose
