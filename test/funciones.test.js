

//test para función de fibonacci
import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';
import { esPinValido } from '../src/esPinValido.js';

describe('fibonacci()', () => {

    it('debe devolver 0 cuando n es 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('debe devolver 1 cuando n es 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('debe devolver 1 cuando n es 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('debe devolver 2 cuando n es 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('debe devolver 3 cuando n es 4', () => {
        expect(fibonacci(4)).toBe(3);
    });

    it('debe devolver 5 cuando n es 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    it('debe devolver 55 cuando n es 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    it('debe lanzar RangeError cuando n es negativo', () => {
        expect(() => fibonacci(-1)).toThrow(RangeError);
    });

});


//esPinValido
describe('esPinValido()', () => {

    it('debe devolver false si el PIN es null', () => {
        expect(esPinValido(null)).toBe(false);
    });

    it('debe devolver false si el PIN es undefined', () => {
        expect(esPinValido(undefined)).toBe(false);
    });

    it('debe devolver false si el PIN está vacío', () => {
        expect(esPinValido('')).toBe(false);
    });

    it('debe devolver false si tiene una longitud distinta de 4 o 6', () => {
        expect(esPinValido('123')).toBe(false);
        expect(esPinValido('12345')).toBe(false);
        expect(esPinValido('1234567')).toBe(false);
    });

    it('debe devolver false si contiene letras', () => {
        expect(esPinValido('12a4')).toBe(false);
    });

    it('debe devolver false si contiene símbolos', () => {
        expect(esPinValido('12-4')).toBe(false);
    });

    it('debe devolver false si todos los dígitos son iguales en un PIN de 4 cifras', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('8888')).toBe(false);
    });

    it('debe devolver false si todos los dígitos son iguales en un PIN de 6 cifras', () => {
        expect(esPinValido('111111')).toBe(false);
        expect(esPinValido('888888')).toBe(false);
    });

    it('debe devolver true si el PIN tiene 4 dígitos diferentes y válidos', () => {
        expect(esPinValido('1234')).toBe(true);
    });

    it('debe devolver true si el PIN tiene 6 dígitos diferentes y válidos', () => {
        expect(esPinValido('123456')).toBe(true);
    });

    it('debe devolver true si el PIN contiene ceros y es válido', () => {
        expect(esPinValido('0123')).toBe(true);
        expect(esPinValido('102030')).toBe(true);
    });

});