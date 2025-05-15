//FUNCIONES JS

/*function saludar(nombre) { 
  return `Bienvenido ${nombre}`;

}

const saludar = 239;

console.log(saludar);
*/

const saludar = function (nombre) {
  return `Bienvenido ${nombre}`;
};

console.log(saludar("Jefferson"));

const saludar2 = (nombre) => {
  return `Bienvenido ${nombre}`;
};

console.log(saludar2("Bernardo"));

const saludar3 = (nombre) => `Bienvenido $nombre`;

console.log(saludar3("tanida"));

const getUser = (nombre) => {
  return {
    nombre: nombre,
    apellido: "Alquinga",
    edad: 34,
  };
};

console.log(getUser("Jefferson"));

const getUser2 = (nombre) => ({
  nombre: nombre,
  apellido: "Alquinga",
  edad: 43,
});

console.log(getUser2("Jefferson3423"));

//TAREA
//1 .- TRANSFORMACIÓN DA UNA FUNCIÓN DE FLECHA
//2. TIENE QUE RETORNAR UN OBJETO IMPLICITO
//3. PRUEBAS

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC453",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);

const getUsuarioActivo1 = (nombre) => ({ uid: "ABC432", username: nombre });

const usuarioActivo1 = getUsuarioActivo1("Jefferson");

console.log(usuarioActivo1);
