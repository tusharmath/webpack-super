/**
 * Created by tushar.mathur on 16/08/16.
 */

'use strict'

import R from 'ramda'

export default R.compose(R.lensPath, R.split('.'))
