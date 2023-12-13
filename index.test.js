const message = require('./index')

test('Comprobación del mensaje ', () => {
  expect(message()).toBe("Hola mundo! Esta una prueba unitaria");
});
