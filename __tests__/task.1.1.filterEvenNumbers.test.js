describe('Task 1.1: Function filterEvenNumbers', () => {
    test('should return only even numbers using filter()', () => {
        const { filterEvenNumbers } = require('../script.js');
        expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
        expect(filterEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
        expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    });
});
