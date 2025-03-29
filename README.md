# Dragon Ball API Viewer

Este proyecto es una aplicación web desarrollada con **React**, **TypeScript** y **Vite** que permite explorar personajes del universo de Dragon Ball. La aplicación consume una API para mostrar información detallada de los personajes, incluyendo sus transformaciones, planeta de origen y otros datos relevantes.

## Características

- **Listado de personajes**: Muestra una lista de personajes obtenidos desde la API.
- **Detalles de personajes**: Al hacer clic en un personaje, se abre un modal con información detallada, incluyendo:
  - Imagen principal del personaje.
  - Descripción, raza, género, nivel de Ki y afiliación.
  - Transformaciones disponibles, mostradas en un carrusel interactivo.
  - Información del planeta de origen.
- **Carrusel de transformaciones**: Utiliza `Swiper` para mostrar las transformaciones del personaje de manera interactiva.
- **Diseño responsivo**: Optimizado para dispositivos móviles y pantallas grandes.
- **Música de fondo**: Reproduce música de fondo automáticamente al cargar la página.

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de desarrollo rápida para proyectos de frontend.
- **Material-UI**: Biblioteca de componentes para el diseño de la interfaz.
- **Swiper**: Biblioteca para carruseles interactivos.
- **Axios**: Cliente HTTP para consumir la API.
- **Skeletons**: Indicadores de carga para mejorar la experiencia del usuario.

## Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/danieldelahoz2212/dragon_ball_api.git

   ```

2. Navega al directorio del proyecto:

   ```bash
   cd apiDragonBall

   ```

3. Instala las dependencias:

   ```bash
   npm install

   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev

   ```

5. Abre tu navegador en http://localhost:5173 para ver la aplicación.

## Estructura del proyecto

````bash
src/
├── components/
│   ├── Cards.tsx       # Componente para mostrar la lista de personajes
├── types/
│   ├── type.ts         # Definiciones de tipos para los datos de la API
├── api/
│   ├── dragon-ball.ts  # Configuración de Axios para consumir la API
├── App.tsx             # Componente principal de la aplicación
├── App.css             # Estilos globales
├── App.css

## API utilizada

La aplicación consume datos de una API de Dragon Ball. Ejemplo de respuesta de la API para un personaje:
   ```bash
   {
   id: 1
   name: "Goku"
   ki: "60.000.000"
   maxKi: "90 Septillion"
   race: "Saiyan"
   gender: "Male"
   description: "El protagonista de la serie, conocido por su gran ..."
   image: "https://dragonball-api.com/characters/goku_normal...."
   affiliation: "Z Fighter"
   deletedAt: null
   originPlanet: {
   id: 3
   name: "Vegeta"
   isDestroyed: true
   description: "El planeta Vegeta, conocido como planeta Plant ant..."
   image: "https://dragonball-api.com/planetas/Planeta_Vegeta..."
   deletedAt: null
   }
   transformations: [
   0: {
   id: 1
   name: "Goku SSJ"
   image: "https://dragonball-api.com/transformaciones/goku_s..."
   ki: "3 Billion"
   deletedAt: null
   }
   1: {
   id: 2
   name: "Goku SSJ2"
   image: "https://dragonball-api.com/transformaciones/goku_s..."
   ki: "6 Billion"
   deletedAt: null
   }
   2: {
   id: 3
   name: "Goku SSJ3"
   image: "https://dragonball-api.com/transformaciones/goku_s..."
   ki: "24 Billion"
   deletedAt: null
   }
   3: {
   id: 4
   name: "Goku SSJ4"
   image: "https://dragonball-api.com/transformaciones/goku_s..."
   ki: "2 Quadrillion"
   deletedAt: null
   }
   4: {
   id: 5
   name: "Goku SSJB"
   image: "https://dragonball-api.com/transformaciones/goku_s..."
   ki: "9 Quintillion"
   deletedAt: null
   }
   5: {
   id: 44
   name: "Goku Ultra Instinc"
   image: "https://dragonball-api.com/transformaciones/goku_u..."
   ki: "90 Septillion"
   deletedAt: null
   }
   ]
   }
