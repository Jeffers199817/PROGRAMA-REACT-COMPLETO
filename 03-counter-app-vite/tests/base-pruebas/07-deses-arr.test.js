import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba en 07-deses-arr', () => { 


    test('debe retornar un string y un número', () => { 
            
        //1.- Inicialización 
        
        const testArreglo = ['ABC', 123];

        //3.- Estimulo

        const [letter, number] = retornaArreglo();
        


        //4.-verificar

        //expect(letter).toEqual('ABC');
        expect(number).toBe(123);

        expect(typeof letter).toBe('string');
        expect(typeof number).toBe('number');

        expect(letter).toEqual(expect.any(String));
         })
 })