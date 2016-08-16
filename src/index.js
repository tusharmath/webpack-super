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
 * Applies changes to the source object to create a new destination object.
 * @interface
 */
export function Transformer () {}

/**
 * Useful utils that help in composing {@link Transformer}
 * @interface
 */
export function Helper () {}
