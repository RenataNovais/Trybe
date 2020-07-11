// Teste se a função foi definida 

const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui
assert.strictEqual(typeof(thereIs), 'function',  'A função não foi definida');
