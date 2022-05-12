/* eslint-disable no-undef */
const { mdLinks } = require('../src/mdlinks.js');
const { validate } = require('../src/validate.js');

describe('mdLinks', () => {
    it('debería ser una función', () => {
        expect(typeof mdLinks).toBe('function');
    });

    test('debería ser una promesa', () => {
        return mdLinks('./pruebas/archivo.md', validate === true).then(data => {
            expect(data.lenght).not.toBe(0);
        });
    });
    
    test('debería rechazar la promesa', () => {
        return expect(mdLinks('./test/dat')).rejects.toMatch('La ruta ingresada es invalida');
    });
});
