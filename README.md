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

```bash
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
```

## API utilizada

La aplicación consume datos de la API de Dragon Ball. Puedes consultar la documentación completa de la API en el siguiente enlace:

[Documentación de la API de Dragon Ball](https://web.dragonball-api.com/documentation)

## Ejemplo de respuesta de la API para un personaje:

```bash
{
  "id": 1,
  "name": "Goku",
  "ki": "60,000,000",
  "maxKi": "90 Septillion",
  "race": "Saiyan",
  "gender": "Male",
  "description": "El protagonista de la serie, conocido por su gran poder y espíritu de lucha.",
  "image": "https://dragonball-api.com/characters/goku_normal.png",
  "affiliation": "Z Fighter",
  "deletedAt": null,
  "originPlanet": {
    "id": 3,
    "name": "Vegeta",
    "isDestroyed": true,
    "description": "El planeta Vegeta, hogar de los Saiyans.",
    "image": "https://dragonball-api.com/planetas/Planeta_Vegeta.png",
    "deletedAt": null
  },
  "transformations": [
    {
      "id": 1,
      "name": "Goku SSJ",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj.png",
      "ki": "3 Billion",
      "deletedAt": null
    },
    {
      "id": 2,
      "name": "Goku SSJ2",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj2.png",
      "ki": "6 Billion",
      "deletedAt": null
    },
    {
      "id": 3,
      "name": "Goku SSJ3",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj3.png",
      "ki": "24 Billion",
      "deletedAt": null
    },
    {
      "id": 4,
      "name": "Goku SSJ4",
      "image": "https://dragonball-api.com/transformaciones/goku_ssj4.png",
      "ki": "2 Quadrillion",
      "deletedAt": null
    },
    {
      "id": 5,
      "name": "Goku SSJB",
      "image": "https://dragonball-api.com/transformaciones/goku_ssjb.png",
      "ki": "9 Quintillion",
      "deletedAt": null
    },
    {
      "id": 6,
      "name": "Goku Ultra Instinct",
      "image": "https://dragonball-api.com/transformaciones/goku_ultra_instinct.png",
      "ki": "90 Septillion",
      "deletedAt": null
    }
  ]
}
```
