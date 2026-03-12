describe('Task 3.2: Async function processData', () => {
    test('should wait 50ms then return number * 2', async () => {
        const { processData } = require('../script.js');
        const startTime = Date.now();
        const result = await processData(10);
        const endTime = Date.now();
        
        expect(result).toBe(20);
        expect(endTime - startTime).toBeGreaterThanOrEqual(50);
        
        expect(await processData(7)).toBe(14);
    });
});
