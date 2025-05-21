import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones.tests.js', () => {    

    test('getUser debe retornar un objeto getUser co uid: y username:', () => { 


        //1.- Inicialización 

        const user = { 
            uid: 'ABC123',
            username:'El_Papi1502'
        }

        //2.-Estimulo 

        const getUserResultado = getUser();

        //3.-Verificar 

        expect(user).toEqual(getUserResultado);

     })


})
 
describe("Pruebas en 05-funciones.tests.js", () => {
  test("getUsuarioActivo debe pasar el nombre y retorna un objeto user", () => {
    //1.- Inicialización

    const user = {
      uid: "ABC567",
      username: "El_Papi1502",
    };

      //2.-Estimulo
    const user1 = "El_Papi1502";

    const getUserResultado = getUsuarioActivo(user1);

    //3.-Verificar

    expect(user).toEqual(getUserResultado);
  });
});