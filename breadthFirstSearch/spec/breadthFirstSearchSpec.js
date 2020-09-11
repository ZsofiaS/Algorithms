'use strict';

describe('Search', () => {
  let search = new Search();
  describe('#breadthFirst', () => {
    it('returns false if graph is empty', () => {
      let graph1 = {
        'you': []
      };
      expect(search.breadthFirst(graph1, 'you')).toEqual(false);
    });
    it('returns false with an example graph where starting point has 1 friend, and the name does not contain cat', () => {
      let graph2 = {
        'you': ['a'],
        'a': []
      };
      expect(search.breadthFirst(graph2, 'you')).toEqual(false);
    });
    it('returns true with an example graph where starting point has 1 friend, and the name does contain cat', () => {
      let graph3 = {
        'you': ['a cat'],
        'a cat': []
      };
      expect(search.breadthFirst(graph3, 'you')).toEqual('a cat');
    });
    it('returns true with an example graph where starting point has 3 friend, and one of the names does contain cat', () => {
      let graph4 = {
        'you': ['a', 'b'],
        'a': [],
        'b': ['c'],
        'c': ['d cat']
      };
      expect(search.breadthFirst(graph4, 'you')).toEqual('d cat');
    });
  })
})
