/* eslint-disable no-undef */
const { readRoute, /* fileOrDirectory, readDirectory, readFiles, extMd, getMdFiles, getLinks */ } = require('../src/isfile.js');

describe('readRoute', () => { 
    it('is a function', () => {
        expect(typeof readRoute).toBe('function');
    });
    
    it('deberia convertir la ruta relativa', () => {
        let relative = './pruebas';
        let absolute = 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\PROYECTO MD\\BOG004-md-links\\pruebas';
        expect(readRoute(relative)).toBe(absolute);
    });
});