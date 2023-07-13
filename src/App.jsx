import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Encabezado from "./Encabezado";
import Submit from "./SubmitButton";
import TextArea from "./TextArea";
import Contenedor from "./Contenedor";
import Preguntas from "./Preguntas";
import { getPreguntas, supabase, realizarPregunta } from "./api/db";
import "./api/bot";

import { useLocation } from "react-router-dom";

function App() {
  const [preguntas, setPreguntas] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Realiza una pregunta relacionada al tema..."
  );
  const [preguntando, setPreguntando] = useState(false);

  function handleTextAreaChange(value) {
    setTextAreaValue(value);
    console.log(textAreaValue);
  }

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pagina = searchParams.get("pagina") || "hddssd";

  async function handleSubmit(e) {
    console.log(preguntando);
    e.preventDefault();

    if (textAreaValue === "") return;

    console.log("Enviando pregunta...");

    setPlaceholder(
      "Pregunta enviada, espera la respuesta puede tardar hasta 3 minutos..."
    );
    setTextAreaValue("");
    setPreguntando(true);

    await realizarPregunta(pagina, textAreaValue);

    setPlaceholder("Realiza una pregunta relacionada al tema...");
    setPreguntando(false);
    setTextAreaValue("");

    console.log("Pregunta enviada");
  }

  useEffect(() => {
    if (pagina != null) {
      getPreguntas(pagina).then((data) => {
        setPreguntas(data);
      });
    }
  }, [pagina]);

  supabase
    .channel("custom-filter-channel")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "preguntas",
        filter: `pagina=eq.${pagina}`,
      },
      (payload) => {
        console.log("Change received!", payload);
        const { pregunta, respuesta } = payload.new;
        setPreguntas([...preguntas, { pregunta, respuesta }]);
      }
    )
    .subscribe();

  return (
    <>
      {preguntas.length > 0 ? <Preguntas preguntas={preguntas} /> : null}
      {/* <Respuestas /> */}
      <form>
        <Contenedor>
          <Encabezado
            titulo={"Bot de respuestas (puede tardar hasta 3 min en responder)"}
          />
          <TextArea
            texto={textAreaValue}
            disabled={preguntando}
            placeholder={placeholder}
            onchange={handleTextAreaChange}
          />
        </Contenedor>
        <Submit onclick={handleSubmit} disabled={preguntando} />
      </form>
    </>
  );
}
export default App;
