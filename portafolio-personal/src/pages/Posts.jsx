// Importa los hooks useEffect y useState desde React
// useState: para manejar estado
// useEffect: para ejecutar código cuando el componente se monta
import { useEffect, useState } from "react";

// Importa Link desde React Router para navegación sin recargar la página
import { Link } from "react-router-dom";

// Importa la instancia de Axios configurada para comunicar con JSON Server
import client from "../api/client";

// Componente Posts: muestra la lista de posts del blog
export default function Posts() {

  // Estado para almacenar el arreglo de posts obtenidos desde la API
  const [posts, setPosts] = useState([]);

  // useEffect se ejecuta una sola vez cuando el componente se monta
  useEffect(() => {
    // Petición GET al endpoint /posts del backend (JSON Server)
    client.get("/posts").then((res) => {
      // Guarda los posts recibidos en el estado
      setPosts(res.data);
    });
  }, []); // Array vacío => solo se ejecuta al montar el componente

  return (
    // Contenedor principal
    <div className="container">
      {/* Título principal del blog */}
      <h1>Blog Técnico</h1>

      {/* Recorre el arreglo de posts y renderiza cada uno */}
      {posts.map((post) => (
        <div key={post.id}>
          {/* Título del post */}
          <h2>{post.title}</h2>

          {/* Fecha del post */}
          <p>{post.date}</p>

          {/* Link que navega al detalle del post usando su id */}
          <Link to={`/posts/${post.id}`}>Leer más</Link>
        </div>
      ))}
    </div>
  );
}
