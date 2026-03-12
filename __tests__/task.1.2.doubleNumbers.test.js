describe('Task 1.2: Function doubleNumbers', () => {
    test('should double each number using map()', () => {
        const { doubleNumbers } = require('../script.js');
        expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
        expect(doubleNumbers([5, 10, 15])).toEqual([10, 20, 30]);
        expect(doubleNumbers([])).toEqual([]);
    });
});
