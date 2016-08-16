/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import R from 'ramda'

/**
 * Returns a new function that is either has no effect (identity) or
 * or has the same as the passed `func` based on the `condition`.
 * @param {boolean} condition - the condition
 * @param {function} func - the function to be called
 * @return {function}
 */
export const when = (condition, func) => {
  return R.ifElse(R.always(condition), func, R.identity)
}
