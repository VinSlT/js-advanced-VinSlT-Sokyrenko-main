describe('Task 4.2: Class Rectangle', () => {
    test('should create a Rectangle with width, height and getArea() method', () => {
        const { Rectangle } = require('../script.js');
        const rect1 = new Rectangle(5, 10);
        expect(rect1.width).toBe(5);
        expect(rect1.height).toBe(10);
        expect(rect1.getArea()).toBe(50);
        
        const rect2 = new Rectangle(7, 3);
        expect(rect2.getArea()).toBe(21);
    });
});
