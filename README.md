# TravelExplorer Ionic

## Descripción

Este es un proyecto de aplicación móvil/web desarrollado con Ionic Framework y Angular. La aplicación se llama "TravelExplorer" y está diseñada para funcionar tanto en plataformas web como móviles utilizando Capacitor.

## Funcionalidades

TravelExplorer es una aplicación que permite explorar destinos de viaje de manera interactiva. Sus principales funcionalidades incluyen:

- **Pantalla de inicio (Splash Screen)**: Muestra una pantalla de carga inicial durante 2 segundos al abrir la app.
- **Lista de destinos**: Presenta tarjetas interactivas con información sobre destinos populares como París, Tokio y Nueva York.
- **Vista de imágenes**: Al hacer clic en una tarjeta de destino, se muestra una imagen ampliada en una superposición modal.
- **Interfaz responsiva**: Diseñada con Ionic para funcionar en web y móviles, con animaciones y efectos visuales (como ripple effect en las tarjetas).

## Métodos y Tecnologías Aplicadas

- **Arquitectura**: Basada en componentes standalone de Angular e Ionic, siguiendo el patrón de desarrollo moderno para aplicaciones híbridas.
- **Gestión de estado**: Uso de propiedades del componente (selectedImage) para manejar el estado de la vista de imágenes.
- **Eventos y navegación**: Manejo de eventos de clic para interactuar con las tarjetas y mostrar contenido dinámico.
- **Estilos y UX**: SCSS personalizado con transiciones, sombras y colores para mejorar la experiencia de usuario, incluyendo modo oscuro.
- **Integración móvil**: Capacitor para empaquetar la app como nativa en iOS y Android.
- **Desarrollo**: TypeScript para tipado fuerte, y herramientas de Ionic CLI para construcción y pruebas.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (viene con Node.js)
- Ionic CLI (opcional, pero recomendado para funcionalidades avanzadas)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/saoricoder/TravelExplorer.git
   cd TravelExplorer
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

### Desarrollo Web
Para ejecutar la aplicación en modo desarrollo web:

```bash
npm start
```
O si tienes Ionic CLI instalado:
```bash
ionic serve
```

La aplicación estará disponible en `http://localhost:4200` (con `npm start`) o `http://localhost:8100` (con `ionic serve`).

### Desarrollo Móvil
Para probar en dispositivos móviles:

1. Construye la aplicación:
   ```bash
   npm run build
   ```

2. Sincroniza con Capacitor:
   ```bash
   npx cap sync
   ```

3. Ejecuta en una plataforma específica:
   ```bash
   npx cap run android  # Para Android
   npx cap run ios      # Para iOS
   ```

## Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos construidos se generarán en la carpeta `www/`.

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```

Para ejecutar el linter:

```bash
npm run lint
```

## Estructura del Proyecto

- `src/app/`: Código principal de la aplicación Angular/Ionic
  - `home/`: Página principal
- `src/assets/`: Recursos estáticos (iconos, imágenes)
- `src/environments/`: Configuraciones de entorno
- `src/theme/`: Estilos globales y variables SCSS
- `capacitor.config.ts`: Configuración de Capacitor
- `ionic.config.json`: Configuración de Ionic

## Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.