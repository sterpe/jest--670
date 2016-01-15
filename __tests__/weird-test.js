/* global
  describe
  it
  expect
*/

const _ = require.requireActual('lodash')
describe([
  'require.requireActual'
].join(' '), function () {
  it('should not return a mock', function () {
    expect(_.forEach._isMockFunction).toBe(undefined)
  })
})
