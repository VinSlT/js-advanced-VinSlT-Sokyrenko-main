describe('Task 2.2: Function createMultiplier', () => {
    test('should return a function that multiplies by the given multiplier', () => {
        const { createMultiplier } = require('../script.js');
        const double = createMultiplier(2);
        expect(double(5)).toBe(10);
        expect(double(10)).toBe(20);
        
        const triple = createMultiplier(3);
        expect(triple(4)).toBe(12);
        expect(triple(7)).toBe(21);
    });
});
