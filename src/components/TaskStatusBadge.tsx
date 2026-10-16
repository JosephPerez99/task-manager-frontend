import type { TaskStatus } from '../models/task.interface';

interface TaskStatusBadgeProps {
  status: TaskStatus;
}

export function TaskStatusBadge({
  status,
}: TaskStatusBadgeProps) {
  // Muestro la etiqueta según el estado de la tarea.
  const statusLabel =
    status === 'completed' ? 'Completada' : 'Pendiente';

  return (
    <span className={`status-badge status-badge--${status}`}>
      {statusLabel}
    </span>
  );
}
