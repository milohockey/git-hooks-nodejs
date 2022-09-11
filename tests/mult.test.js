const mult = require('../src/mult');

it('should calculate correct value', () => {
   const result = mult(5, 5);
   expect(result).toBe(25);
})