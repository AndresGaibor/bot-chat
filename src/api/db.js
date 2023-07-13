import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabaseUrl = "https://bgaysluggolvjnozqzep.supabase.co";

// eslint-disable-next-line no-undef
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function getPreguntas(pagina = "react") {
  let { data } = await supabase
    .from("preguntas")
    .select("*")
    .eq("pagina", pagina);

  return data;
}

async function realizarPregunta(pagina, pregunta) {
  // eslint-disable-next-line no-undef
  const URL = process.env.BACKEND_URL + "/api/preguntar";
  console.log(URL);
  const respuesta = await axios.get(URL, {
    params: {
      pregunta: pregunta,
      pagina: pagina,
    },
  });

  return respuesta.data;
}

export { getPreguntas, realizarPregunta, supabase };
