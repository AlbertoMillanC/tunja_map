# Obras Públicas Tunja - Visualizador Interactivo

## Propósito

Este proyecto es un visualizador interactivo de obras públicas en la ciudad de Tunja, Colombia. Permite a los ciudadanos y funcionarios monitorear el progreso y estado de las diferentes obras de infraestructura en la ciudad.

## Características Principales

### Mapa Interactivo
- Visualización 3D de Tunja usando Mapbox GL JS
- Marcadores interactivos para cada obra
- Navegación intuitiva y zoom adaptativo
- Vista detallada de ubicaciones específicas

### Catálogo de Obras
- Lista completa de obras públicas
- Información detallada de cada proyecto:
  - Título y descripción
  - Presupuesto asignado
  - Estado actual
  - Fechas de inicio y finalización
  - Galería de imágenes del progreso

### Características Sociales
- Integración con Instagram para actualizaciones en tiempo real
- Compartir información sobre obras específicas
- Seguimiento del progreso mediante fotos y actualizaciones

## Tecnologías

- Next.js 15 - Framework de React con Server Components
- Mapbox GL JS - Visualización de mapas
- TypeScript - Tipado estático
- Tailwind CSS - Estilos y diseño responsivo
- SWR - Gestión de estado y caché

## Inicio Rápido

1. Clonar el repositorio:
```bash
git clone https://github.com/yourusername/tunja_map.git
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

4. Iniciar el servidor de desarrollo:
```bash
pnpm dev
```

