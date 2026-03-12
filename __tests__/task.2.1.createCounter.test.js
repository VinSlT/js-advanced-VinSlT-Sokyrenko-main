describe('Task 2.1: Function createCounter', () => {
    test('should return a function that increments a counter', () => {
        const { createCounter } = require('../script.js');
        const counter1 = createCounter();
        expect(counter1()).toBe(1);
        expect(counter1()).toBe(2);
        expect(counter1()).toBe(3);
        
        const counter2 = createCounter();
        expect(counter2()).toBe(1);
        expect(counter2()).toBe(2);
    });
});
