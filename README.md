
# Administrador de tareas - Frontend

Aplicación desarrollada durante el elemento de competencia 2 de Diseño Frontend con Frameworks.

## Tecnologías

- React
- TypeScript
- Vite
- PNPM
- CSS
- Git y GitHub

## Alcance actual

La aplicación permite visualizar una colección local de tareas mediante componentes React.

Actualmente incluye:

- Modelo de tareas definido con TypeScript.
- Cinco tareas de demostración.
- Renderizado dinámico de tareas mediante `map()`.
- Uso de claves estables con `task.id`.
- Estados de tarea: pendiente y completada.
- Componente reutilizable `TaskStatusBadge`.
- Resumen dinámico del total de tareas, pendientes y completadas.
- Mensaje para cuando la colección está vacía.
- Visualización de la fecha de actualización.
- Diseño adaptable.

Los formularios, filtros y acciones de crear, editar, eliminar y cambiar el estado se implementarán en actividades posteriores.

## Instalación

```bash
pnpm install
```

## Ejecución

```bash
pnpm dev
```

## Validación

```bash
pnpm lint
pnpm build
```

## Componentes principales

- `AppHeader`: encabezado de la aplicación.
- `TaskForm`: formulario para tareas.
- `TaskFilters`: filtros de tareas.
- `TaskSummary`: resumen de tareas.
- `TaskList`: lista de tareas.
- `TaskItem`: información de cada tarea.
- `TaskStatusBadge`: etiqueta del estado de la tarea.

## Estructura principal

- `src/components`: componentes visuales.
- `src/data`: colección local de tareas.
- `src/models`: interfaces y tipos de TypeScript.
- `src/styles`: estilos de la aplicación.

## Modelo de tarea

Cada tarea contiene los siguientes campos:

- `id`: identificador único.
- `title`: título de la tarea.
- `status`: estado de la tarea.
- `createdAt`: fecha de creación.
- `updatedAt`: fecha de actualización.
