import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {

    test('getHeroByIdAsync debe retornar un héroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                  id: 1,
                  name: "Batman",
                  owner: "DC",
                });

                done();
            })
    });


    test("getHeroByIdAsync no debe retornar un héroe sin no existe", (done) => {
      const id = 100;
        getHeroeByIdAsync(id).
            then((hero) => {
                expect(hero).toBeFalsy();
                done();
            })
        
            .catch((error) => { 
                console.log(error)
                expect(error).toEqual( "No se pudo encontrar el héroe con el id: " + id );
                
        done();
            
        })

    });
    

    });
