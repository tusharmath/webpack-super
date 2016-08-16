/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import R from 'ramda'
import {setAt} from './set-at'

/**
 * Copies a value at a `path` from `source` to `destination`
 * @function
 * @param {string} path - path string where the value needs to be picked/set
 * @param {object} source - source object from where the value needs to be picked
 * @param {object} destination - destination object where the value needs to be set
 * @returns {object}
 * @example
 * copy('a.b', {a: {b: 100}}, {p: 100}) // outputs: {a: {b: 100}, q: 100}
 */
export const copy = (path, source, destination) => {
  return setAt(path, R.path(R.split('.', path), source), destination)
}
