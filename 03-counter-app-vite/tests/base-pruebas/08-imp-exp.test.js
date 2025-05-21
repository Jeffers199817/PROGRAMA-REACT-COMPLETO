import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeByI deve de retornar un héroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1,name: "Batman", owner: "DC", });

    })

    test("getHeroeByI deve de retornar un héroe por ID", () => {
      const id = 100;
      const hero = getHeroeById(id);

      expect(hero).toBe(undefined);
    });

    test('getHeroesByOwner retorna un arreglo con los heroes de dc con length ===3', () => {
        
        const dcHeroes = getHeroesByOwner('DC');
        console.log(dcHeroes);
        expect(dcHeroes).toHaveLength(3);
    });
    
    test("getHeroesByOwner retorna un arreglo con los heroes de Marvel con length ===2", () => {
      const dcHeroes = getHeroesByOwner("Marvel");
      console.log(dcHeroes);
      expect(dcHeroes).toHaveLength(2);
    });
        
    
    })


