import { recalculate } from '../lib/salaryRecalculator.js'
import chai from 'chai'
const { assert } = chai

describe('salaryRecalculator', () => {
  describe('recalculate', () => {
    const OLD_RANGE = {
      LOWER_RANGE: 1000,
      UPPER_RANGE: 2000,
    }

    const NEW_RANGE = {
      LOWER_RANGE: 1500,
      UPPER_RANGE: 2500,
    }

    it('recalculates lowest salary correctly', () => {
      const recalculatedSalary = recalculate(
        1000,
        OLD_RANGE.LOWER_RANGE,
        OLD_RANGE.UPPER_RANGE,
        NEW_RANGE.LOWER_RANGE,
        NEW_RANGE.UPPER_RANGE
      )
      assert.equal(recalculatedSalary, 1500)
    })

    it('recalculates mid salary correctly', () => {
      const recalculatedSalary = recalculate(
        1500,
        OLD_RANGE.LOWER_RANGE,
        OLD_RANGE.UPPER_RANGE,
        NEW_RANGE.LOWER_RANGE,
        NEW_RANGE.UPPER_RANGE
      )
      assert.equal(recalculatedSalary, 2000)
    })
  })
})
