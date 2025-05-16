//import { heroes } from './data/heroes'
//import { heroes} from './data/heroes'

import { heroes } from "./data/heroes";


const getHeroById = (id) => {
  
  return heroes.find((idHeroes)=> idHeroes.id==id);
}

console.log(getHeroById(5));