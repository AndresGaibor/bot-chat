import PropTypes from "prop-types";

function Pregunta(props) {
  return (
    <>
      <h5 className="mb-2 text-left text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.pregunta}
      </h5>
      <p className="text-justify font-normal text-gray-700 dark:text-gray-400">
        {props.respuesta}
      </p>
    </>
  );
}

function Preguntas(props) {
  return (
    <div className="block mb-4  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
        Preguntas anteriores
      </h1>
      {props.preguntas.map((item, index) => {
        return (
          <Pregunta
            key={index}
            pregunta={item.pregunta}
            respuesta={item.respuesta}
          />
        );
      })}
    </div>
  );
}

Pregunta.propTypes = {
  pregunta: PropTypes.string,
  respuesta: PropTypes.string,
};

Pregunta.defaultProps = {
  pregunta: "¿Qué es React?",
  respuesta:
    "React es una librería de JavaScript para construir interfaces de usuario.",
};

Preguntas.propTypes = {
  preguntas: PropTypes.arrayOf(PropTypes.shape(Pregunta.propTypes)),
};
const preguntasPorDefecto = [
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

Preguntas.defaultProps = {
  preguntas: preguntasPorDefecto,
};

export default Preguntas;
