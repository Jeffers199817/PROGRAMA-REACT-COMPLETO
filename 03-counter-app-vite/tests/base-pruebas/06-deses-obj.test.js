import { usContext } from "../../src/base-pruebas/06-deses-obj"


describe('Prueba en 06-deses-obj.js', () => { 

    test('usContext retorna un onjeto de tipo usContext', () => {   

        //1. Inicialización 

        const clave = 'Jefferson';
        const edad = '32';
        const testUsContext = { 
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng:-12.3232
            }
        }

        //2. Estimulo 
         
        const usContextTest = usContext(clave, edad);

        //3. Verificarlo

        expect(testUsContext).toEqual(usContextTest);

     })
 })