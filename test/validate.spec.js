/* eslint-disable no-undef */
const { validate, stats, twOptions } = require('../src/validate.js');

describe('validate', () => {
    it('debería ser una función', () => {
        expect(typeof validate).toBe('function');
    });

    test('debería retornar un array de objetos con un link', () => {
        return validate('./test/data.md', validate === true)
            .then(res => {
                res.map((data) => {
                    return data;
                });
                expect(res).toHaveLength(3);
            });
    });
});

describe('stats', () => {
    it('debería ser una función', () => {
        expect(typeof stats).toBe('function');
    });
});

describe('validate', () => {
    it('debería ser una función', () => {
        expect(typeof twOptions).toBe('function');
    });
});