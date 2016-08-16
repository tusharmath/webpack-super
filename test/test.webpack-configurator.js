/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import C from '../src/webpack-configurator'
import test from 'ava'

test('keys', t => {
  t.deepEqual(Object.keys(C), ['setAt', 'appendAt'])
})
