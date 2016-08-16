/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import C from '../src/index'
import test from 'ava'

test('keys', t => {
  const expected = ['setAt', 'appendAt', 'compose', 'copy', 'when']
  t.deepEqual(Object.keys(C).sort(), expected.sort())
})
