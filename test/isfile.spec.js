/* eslint-disable no-undef */
const { readRoute, fileOrDirectory, readDirectory, readFiles, extMd, getMdFiles, getLinks } = require('../src/isfile.js');

describe('readRoute', () => { 
    it('debería ser una función', () => {
        expect(typeof readRoute).toBe('function');
    });
    
    it('debería convertir la ruta relativa', () => {
        let relative = './pruebas/';
        let absolute = 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\PROYECTO MD\\BOG004-md-links\\pruebas';
        expect(readRoute(relative)).toBe(absolute);
    });
});

describe('fileOrDirectory', () => {
    it('debería ser una función', () => {
        expect(typeof fileOrDirectory).toBe('function');
    });
});

describe('readDirectory', () => {
    it('debería ser una función', () => {
        expect(typeof readDirectory).toBe('function');
    });
    it('deberia retornar un array con el contenido del directorio', () => {
        expect(getMdFiles('./pruebas/').length).not.toBe(0);
    }); 
});

describe('readFiles', () => {
    it('debería ser una función', () =>{
        expect(typeof readFiles).toBe('function');
    });

    test('debería leer un archivo', () => {
        return readFiles('./pruebas/archivo.md').then(data => {
            expect(data.json).not.toBe(0);
        });
    });
    test('debería rechazar la promesa', () => {
        return expect(readFiles('./package.json')).rejects.toMatch('No es archivo de extensión .md');
    });
});

describe('extMd', () => {
    it('debería ser una función', () => {
        expect(typeof extMd).toBe('function');
    });

    it('debería ser true para una archivo .md', () => {
        expect(extMd('readme.md')).toBe(true);
    });
});

describe('getMdFiles', () => {
    it('debería ser una función', () => {
        expect(typeof getMdFiles).toBe('function');
    });
    it('deberia retornar un array de archivos .md', () => {
        expect(getMdFiles('./readme.md').length).toBe(1);
    }); 
});

describe('getLinks', () => {
    it('debería ser una función', () => {
        expect(typeof getLinks).toBe('function');
    });
    it('deberia retornar un array de links', () => {
        return getLinks('./pruebas/archivo.md').then(data => {
            expect(data.length).toBe(5);
        });
    });
});

