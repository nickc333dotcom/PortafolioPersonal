// Importa los componentes necesarios de React Router para manejar rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa el proveedor del contexto de tema (light / dark)
import { ThemeProvider } from "./context/ThemeContext";

// Importa el componente de navegación superior
import Navbar from "./components/Navbar";

// Importa las páginas principales de la aplicación
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

// Importa los estilos globales de la aplicación
import "./App.css";

// Componente principal de la aplicación
export default function App() {
  return (
    // ThemeProvider envuelve toda la app para que el tema esté disponible globalmente
    <ThemeProvider>
      {/* BrowserRouter habilita el sistema de rutas */}
      <BrowserRouter>

        {/* Navbar se muestra en todas las páginas */}
        <Navbar />

        {/* Definición de rutas de la aplicación */}
        <Routes>
          {/* Ruta principal: Hoja de Vida */}
          <Route path="/" element={<Home />} />

          {/* Ruta del blog: lista de posts */}
          <Route path="/posts" element={<Posts />} />

          {/* Ruta dinámica: detalle de un post según su ID */}
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}
