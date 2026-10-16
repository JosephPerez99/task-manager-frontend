
import type { Task } from "../models/task.interface";
import { TaskStatusBadge } from "./TaskStatusBadge";

// Defino qué datos debe recibir este componente.
interface TaskItemProps {
  task: Task;
}

// Convierto la fecha ISO en una fecha más fácil de leer.
function formatTaskDate(value: string): string {
  const date = new Date(value);

  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
  }).format(date);
}

export function TaskItem({ task }: TaskItemProps) {
  // Extraigo del objeto los datos que voy a mostrar.
  const { title, status, updatedAt } = task;

  return (
    <article
      className={`task-item task-item--${status}`}
      role="listitem"
    >
      <div className="task-item__content">
        <h3 className="task-item__title">{title}</h3>

        {/* Muestro el estado usando el componente reutilizable. */}
        <TaskStatusBadge status={status} />

        {/* Muestro cuándo se actualizó la tarea. */}
        <p className="task-item__date">
          Actualizada:{" "}
          <time dateTime={updatedAt}>
            {formatTaskDate(updatedAt)}
          </time>
        </p>
      </div>

      {/* Los botones siguen deshabilitados hasta la actividad 7. */}
      <div
        className="task-item__actions"
        role="group"
        aria-label={`Acciones para ${title}`}
      >
        <button type="button" disabled>
          Cambiar estado
        </button>

        <button type="button" disabled>
          Editar
        </button>

        <button
          type="button"
          className="button-danger"
          disabled
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}
