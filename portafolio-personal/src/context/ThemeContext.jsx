// Importamos las funciones necesarias de React:
// - createContext para crear el contexto
// - useState para manejar el estado del tema
// - useEffect para ejecutar efectos secundarios (cuando cambia el tema)
import { createContext, useEffect, useState } from "react";

// Creamos el contexto del tema
// Este contexto permitirá compartir el tema (light/dark)
// y la función para cambiarlo en toda la app
export const ThemeContext = createContext();

// Componente proveedor del contexto del tema
// Envuelve toda la aplicación para que los componentes hijos
// puedan acceder al tema y a la función toggleTheme
export function ThemeProvider({ children }) {

  // Estado del tema:
  // Intenta leer primero el valor guardado en localStorage
  // Si no existe, usa "light" por defecto
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // useEffect se ejecuta cada vez que cambia el tema
  useEffect(() => {
    // Asigna la clase al body (light o dark)
    document.body.className = theme;

    // Guarda la preferencia del usuario en localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Función para alternar entre light y dark
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  // Retornamos el proveedor del contexto
  // Pasamos el tema actual y la función para cambiarlo
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
