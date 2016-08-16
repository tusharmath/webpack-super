/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'
import {setAt} from './set-at'
import {appendAt} from './append-at'
import {copy} from './copy'
import {when} from './when'
import {compose} from './compose'

export default {setAt, appendAt, copy, when, compose}
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
