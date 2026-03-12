describe('Task 4.1: Class Person', () => {
    test('should create a Person with name, age and introduce() method', () => {
        const { Person } = require('../script.js');
        const person1 = new Person('Alice', 25);
        expect(person1.name).toBe('Alice');
        expect(person1.age).toBe(25);
        expect(person1.introduce()).toBe("Hi, I'm Alice and I'm 25 years old.");
        
        const person2 = new Person('Bob', 30);
        expect(person2.introduce()).toBe("Hi, I'm Bob and I'm 30 years old.");
    });
});
