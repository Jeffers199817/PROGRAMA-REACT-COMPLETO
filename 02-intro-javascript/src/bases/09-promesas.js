import getHeroById from "./bases/08-importaciones-exportaciones";

//PROMESAS

/* const valorHeroe = 3;


const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroById(valorHeroe);

    if (!heroe) {
      reject("No se encontró al héroe");
    } else {
      resolve(heroe);
    }
  }, 2000); // Simula 2 segundos de espera
});


promesa
  .then((heroe) => {
    console.log('Then de la promesa');
    console.table('Héroe encontrado', heroe);
  })

  .catch((error) => {
    console.log('catch de la promersa');
    console.warn(error);

  }); */

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id);

      if (!heroe) {
        reject("No se encontró al héroe");
      } else {
        resolve(heroe);
      }
    }, 2000); // Simula 2 segundos de espera
  });
};

getHeroByIdAsync(2).then(console.log).catch(console.warn);
