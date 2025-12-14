// Importamos los hooks de React que vamos a usar:
// useState para manejar estados
// useEffect para ejecutar código cuando el componente se monta
import { useEffect, useState } from "react";

// Importamos la instancia de Axios ya configurada
// Esta se encarga de comunicarse con JSON Server (backend)
import api from "../api/client";

// Importamos los estilos generales de la app
import "../App.css";

// Componente principal de la página Home (Hoja de Vida)
export default function Home() {

  // Estado para guardar la información principal del perfil
  const [perfil, setPerfil] = useState(null);

  // Estado para la lista de educación
  const [educacion, setEducacion] = useState([]);

  // Estado para las habilidades
  const [habilidades, setHabilidades] = useState([]);

  // Estado para los idiomas
  const [idiomas, setIdiomas] = useState([]);

  // Estado para las referencias personales
  const [referencias, setReferencias] = useState([]);

  // useEffect se ejecuta una sola vez cuando el componente se carga
  useEffect(() => {

    // Petición GET para obtener los datos del perfil
    api.get("/perfil").then(res => setPerfil(res.data));

    // Petición GET para obtener la educación
    api.get("/educacion").then(res => setEducacion(res.data));

    // Petición GET para obtener las habilidades
    api.get("/habilidades").then(res => setHabilidades(res.data));

    // Petición GET para obtener los idiomas
    api.get("/idiomas").then(res => setIdiomas(res.data));

    // Petición GET para obtener las referencias
    api.get("/referencias").then(res => setReferencias(res.data));

  }, []); // El array vacío indica que se ejecuta solo una vez

  // Si el perfil aún no se ha cargado, no renderizamos nada
  if (!perfil) return null;

  // Renderizado del componente
  return (
    <div className="container">

      {/* SECCIÓN PERFIL */}
      <header className="card">
        <h1>{perfil.nombre}</h1>
        <h2>{perfil.titulo}</h2>
        <p>{perfil.descripcion}</p>
      </header>

      {/* SECCIÓN EDUCACIÓN */}
      <section className="card">
        <h3>Educación</h3>
        <ul>
          {educacion.map(e => (
            <li key={e.id}>
              <strong>{e.institucion}</strong><br />
              {e.detalle}
            </li>
          ))}
        </ul>
      </section>

      {/* SECCIÓN HABILIDADES */}
      <section className="card">
        <h3>Habilidades</h3>
        <div className="tags">
          {habilidades.map(h => (
            <span key={h.id} className="tag">
              {h.nombre}
            </span>
          ))}
        </div>
      </section>

      {/* SECCIÓN IDIOMAS */}
      <section className="card">
        <h3>Idiomas</h3>
        <ul>
          {idiomas.map(i => (
            <li key={i.id}>{i.nombre}</li>
          ))}
        </ul>
      </section>

      {/* SECCIÓN REFERENCIAS */}
      <section className="card">
        <h3>Referencias</h3>
        <ul>
          {referencias.map((r, idx) => (
            <li key={idx}>
              <strong>{r.nombre}</strong> — {r.cargo}<br />
              {r.telefono}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
