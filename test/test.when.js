/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import {when} from '../src/when'
import test from 'ava'

test('when(true)', t => {
  t.is(when(true, x => x + 1)(100), 101)
})

test('when(false)', t => {
  t.is(when(false, x => x + 1)(100), 100)
})
