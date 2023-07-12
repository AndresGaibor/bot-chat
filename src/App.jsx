// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Encabezado from "./Encabezado";
import Submit from "./SubmitButton";
import TextArea from "./TextArea";
import Contenedor from "./Contenedor";
import Preguntas from "./Preguntas";

function App() {
  // const [count, setCount] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const preguntas = [
    {
      pregunta: "¿Qué es React?",
      respuesta:
        "React es una librería de JavaScript para construir interfaces de usuario.",
    },
    {
      pregunta: "¿Qué es Vite?",
      respuesta: "Vite es un build tool para proyectos de JavaScript.",
    },
  ];

  return (
    <>
      {preguntas.length > 0 ? <Preguntas /> : null}
      {/* <Respuestas /> */}
      <form>
        <Contenedor>
          <Encabezado titulo={"Bot de respuestas"} />
          <TextArea />
        </Contenedor>
        <Submit />
      </form>
    </>
  );
}

export default App;
