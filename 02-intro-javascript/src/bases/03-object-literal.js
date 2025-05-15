

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "new york",
    zip: 3423423,
    lat: 14.342,
    lng: 34534,
  },
};
console.log(persona);

const personaNueva = { persona4: persona };

personaNueva.nombre = "Jefferson";
personaNueva.apellido = "Alquinga";

const personaNueva1 = { ...persona };
const personaNueva2 = JSON.parse(JSON.stringify(persona));
personaNueva2.nombre = "Tania";
personaNueva2.apellido = "Pastillo";

personaNueva1.nombre = "Bernardo";
personaNueva1.apellido = "Chuquimarca";

console.table(personaNueva2);

console.table(personaNueva1);

console.log(personaNueva);

console.log({ persona3: persona });

console.table(persona);
  
  