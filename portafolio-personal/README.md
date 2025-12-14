# Proyecto React: Portafolio Personal

# Descripción del Proyecto
Esta aplicación web está desarrollada con React y permite visualizar mi hoja de vida y entradas de blog. Los datos se almacenan en un archivo JSON (`db.json`) y se muestran dinámicamente en la interfaz.  
El proyecto tiene como objetivo practicar la manipulación de datos, el uso de componentes y la creación de interfaces interactivas con React.

# Funcionalidades
- Mostrar un listado de habilidades desde un archivo JSON.
- Agregar nuevas habilidades (según implementación futura).
- Actualizar y eliminar habilidades (opcional según evolución del proyecto).
- Interfaz sencilla, limpia y responsive.

# Tecnologías Utilizadas
- React: Biblioteca principal para construir la interfaz.
- JSON: Almacenamiento de datos iniciales.
- CSS: Estilos para mejorar la presentación de la aplicación.

# Instalación y Uso

# Requisitos Previos
- Node.js instalado (https://nodejs.org/)
- npm o yarn para gestionar paquetes.

# Pasos para Ejecutar el Proyecto
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2. Entrar a la carpeta del proyecto 
3. Instalar las dependencias 
    npm install 
4. levantar el backend en una terminal diferente 
    npx json-server --watch db.json --port 3000
    Endpoints que deben aparecer: 
    http://localhost:3000/perfil
    http://localhost:3000/educacion
    http://localhost:3000/habilidades
    http://localhost:3000/idiomas
    http://localhost:3000/referencias
    http://localhost:3000/posts
5. levantar el frontend en una terminal diferente
    npm run dev