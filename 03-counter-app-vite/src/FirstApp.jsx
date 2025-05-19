import { useState } from "react";

export const FirstApp = () => {
  const estudiante = {
    nombre: "Jefferson",
    apellido: "Alquinga",
    edad: 27,
    direccion: "Puembo-chiche",
    lugar: "Quito",
  };

  const [esGraduado, setEsGraduado] = useState(null);

  const estudianteFunction = (graduado) =>
    graduado === true ? "Sí está graduado" : "No está graduado";

  const handleGraduado = (respuesta) => {
    setEsGraduado(respuesta === "SÍ");
  };

  return (
    <>
          <h1>{estudiante.nombre} {estudiante.apellido}</h1>
      <code>{JSON.stringify(estudiante, null, 2)}</code>
      <div>
        <p>
          ¿{estudiante.nombre} {estudiante.apellido} es graduado?
        </p>
        <button onClick={() => handleGraduado("SÍ")}>SÍ</button>
        <button onClick={() => handleGraduado("NO")}>NO</button>
      </div>
      {esGraduado !== null && <h1>{estudianteFunction(esGraduado)}</h1>}
      <p>Estudiante de Ingeniería</p>
    </>
  );
};
