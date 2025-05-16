//import { heroes } from './data/heroes'
//import { heroes} from './data/heroes'

import { heroes } from "./data/heroes";


const getHeroById = (id) => heroes.find((idHeroes)=> idHeroes.id==id);


console.log(getHeroById(2));

//filter para todos

const getHeroByOwner = (owner) => heroes.filter((ownerHeroes) => ownerHeroes.owner.toLowerCase().indexOf(owner.toLowerCase()) > -1);

console.table(getHeroByOwner('Marvel'));