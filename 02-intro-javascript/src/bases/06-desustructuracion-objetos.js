//DESUSTRUCTURACIÓN
//ASIGNACIÓN DESUSTRUCTURANTE

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const { nombre: nombre1, edad: edad1, clave: clave1 } = persona;

console.log(nombre1, edad1, clave1);

const useContext = ({ nombre, edad, clave, rango = "Capitán" }) => {
  //console.log(nombre, edad, clave, rango);

  return {
    nombreClave: nombre,
    anios: edad,
    clave: clave,
    rango: rango,
    latlng: {
      lat: 342343,
      lng: 345342,
    },
  };
};

// eslint-disable-next-line react-hooks/rules-of-hooks
//const { nombreClave, anios, clave, rango, latlng:{ lat, lng} } = useContext(persona);

//console.log(nombreClave, anios, clave, rango);

//tambien podria hacer esto
// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anios, clave, rango, latlng } = useContext(persona);

console.log(nombreClave, anios, clave, rango);
const { lat, lng } = latlng;

console.log(lat, lng);
