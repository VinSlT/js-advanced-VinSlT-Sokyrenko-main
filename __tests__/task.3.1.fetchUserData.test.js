describe('Task 3.1: Async function fetchUserData', () => {
    test('should return user data after 100ms delay', async () => {
        const { fetchUserData } = require('../script.js');
        const startTime = Date.now();
        const result = await fetchUserData();
        const endTime = Date.now();
        
        expect(result).toEqual({ id: 1, name: "John Doe" });
        expect(endTime - startTime).toBeGreaterThanOrEqual(100);
    });
});
