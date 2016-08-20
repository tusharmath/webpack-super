/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'
import {setAt} from './set-at'
import {appendAt} from './append-at'
import {when} from './when'
import {compose} from './compose'

export default {setAt, appendAt, when, compose}
/**
 * @private
 * @interface
 */
export function Transformer () {}

/**
 * @private
 * @interface
 */
export function Helper () {}
