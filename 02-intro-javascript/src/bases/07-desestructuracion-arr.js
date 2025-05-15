//destructuraciones de arreglos

const arreglo = ["Goku", "Vegeta", "Maginbuu"];

const [p1, p2, p3] = arreglo;

console.log(p1, p2, p3);

const retornaArreglo = () => {
  return ["ABC", 1334];
};

const [abecedario, numeros] = retornaArreglo();

console.log(abecedario, numeros);

//TAREA

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [valor, setNombre] = useState("Goku");

console.log(valor, setNombre);

console.log(setNombre());
setNombre();
