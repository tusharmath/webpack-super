/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import {appendAt} from '../src/append-at'
import test from 'ava'

test('appendAt', t => {
  t.deepEqual(
    appendAt('a.c', 100, {a: {c: [1]}}),
    {a: {c: [1, 100]}}
  )
})
