
/*
  Componente: TaskItem
  Función: Mostrar una tarea con su título, estado
  y botones de acciones.
*/

// Solo se permiten estos dos estados.
type TaskStatus = 'pending' | 'completed';

// Define los datos que recibirá el componente.
interface TaskItemProps {
  title: string;
  status: TaskStatus;
}

export function TaskItem({ title, status }: TaskItemProps) {
  // Convierte el estado en un texto para mostrarlo.
  const statusLabel =
    status === 'completed' ? 'Completada' : 'Pendiente';

  return (
    <article
      className={`task-item task-item--${status}`}
      role="listitem"
    >
      {/* Título y estado de la tarea */}
      <div className="task-item__content">
        <h3 className="task-item__title">{title}</h3>

        <span className={`status-badge status-badge--${status}`}>
          {statusLabel}
        </span>
      </div>

      {/* Botones desactivados en esta actividad */}
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
