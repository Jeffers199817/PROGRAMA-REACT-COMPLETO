import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruebas en 02-templates-string', () => {

    test('getSaludo debe retornar "Hola Jefferson"', () => {

         //1.-Inicialización
          
         const nombre = 'Jefferson';
         
         //2.- Estimulo
         const resultado2 = getSaludo(nombre);
 
 
         //3.- Verificar 
 
        expect(resultado2).toBe(`Hola ${nombre}`); 

    });
    




});