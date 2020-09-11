'use strict';

describe('Recursion', () => {
  let recursion = new Recursion();
  describe('#sum', () => {
    it('returns sum of empty array', () => {
      expect(recursion.sum([])).ToEqual([]);
    })
  })
})
