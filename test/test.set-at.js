/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import {setAt} from '../src/set-at'
import test from 'ava'

test('setAt', t => {
  t.deepEqual(
    setAt('a.c', 100, {a: {c: 10, d: 20}}), {a: {c: 100, d: 20}}
  )
})
