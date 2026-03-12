describe('Task 1.3: Function sumArray', () => {
    test('should sum all numbers using reduce()', () => {
        const { sumArray } = require('../script.js');
        expect(sumArray([1, 2, 3, 4])).toBe(10);
        expect(sumArray([10, 20, 30])).toBe(60);
        expect(sumArray([5])).toBe(5);
        expect(sumArray([])).toBe(0);
    });
});
