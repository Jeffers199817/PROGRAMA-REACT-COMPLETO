//VARIABLES Y CONSTANTES

const nombre = "Fernando";
const apellido = "alquinga";

const Persona = {
  nombre: "Jefferson",
  alquinga: "Alquinga",
  edad: "27",
  carrera: "Software Engineer",
};

const Vector1 = [1, 3, 4, 5, 6, 5];

const Persona5 = {
  nombre: "Jefferson",
  edad: "23",
};
const Vector3 = [Persona, Persona5];

console.table(Vector1);
const { nombre: nombreJefferson, edad: edadViejo } = Persona;
console.table(Persona);
console.log(nombreJefferson, "Es un  persona de edad", edadViejo);
console.table(Vector3);
console.log("Su nombre es: ", nombre, " y su apellido es: ", apellido);

function calcularSuenos() {
  return "Mi sueño es ser un gran programador";
}

const calcularSuenos1 = (edad, nombre) => {
  return `Su sueños se van a cumplir ${nombre} con la edad de ${edad}.`;
};

console.log(calcularSuenos());
console.log(calcularSuenos1(27, "Jefferson"));

calcularSuenos();
