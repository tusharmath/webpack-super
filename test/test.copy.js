/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import {copy} from '../src/copy'
import test from 'ava'

test('copy()', t => {
  t.deepEqual(
    copy('aa.bb', {aa: {bb: 100}}, {aa: {bb: 1, qq: 99}}),
    {aa: {bb: 100, qq: 99}}
  )
})
