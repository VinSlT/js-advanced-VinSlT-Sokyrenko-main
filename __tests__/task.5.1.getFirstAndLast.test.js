describe('Task 5.1: Function getFirstAndLast', () => {
    test('should use destructuring to return first and last elements', () => {
        const { getFirstAndLast } = require('../script.js');
        expect(getFirstAndLast([1, 2, 3, 4, 5])).toEqual({ first: 1, last: 5 });
        expect(getFirstAndLast(['a', 'b', 'c'])).toEqual({ first: 'a', last: 'c' });
        expect(getFirstAndLast([10, 20])).toEqual({ first: 10, last: 20 });
    });
});
