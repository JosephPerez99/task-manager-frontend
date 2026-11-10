import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router';
import type { Task } from '../models/task.interface';
import {
  TASK_TITLE_MAX_LENGTH,
  validateTaskTitle,
} from '../utils/task-validation';
import { TaskStatusBadge } from './TaskStatusBadge';
import { formatTaskDate } from '../utils/date';

interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onEditTask: (id: string, title: string) => void;
  onDeleteTask: (id: string) => boolean;
}

export function TaskItem({
  task,
  onToggleStatus,
  onEditTask,
  onDeleteTask,
}: TaskItemProps) {
  const { id, title, status, updatedAt } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(title);
  const [error, setError] = useState<string | null>(null);

  function handleStartEdit(): void {
    setDraftTitle(title);
    setError(null);
    setIsEditing(true);
  }

  function handleCancel(): void {
    setDraftTitle(title);
    setError(null);
    setIsEditing(false);
  }

  function handleTitleChange(value: string): void {
    setDraftTitle(value);

    if (error) {
      setError(validateTaskTitle(value));
    }
  }

  function handleSave(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const validationError = validateTaskTitle(draftTitle);

    if (validationError) {
      setError(validationError);
      return;
    }

    onEditTask(id, draftTitle.trim());
    setError(null);
    setIsEditing(false);
  }

  return (
    <article
      className={`task-item task-item--${status}`}
      role="listitem"
    >
      <div className="task-item__content">
        {isEditing ? (
          <form
            className="task-item__edit-form"
            onSubmit={handleSave}
          >
            <label className="sr-only" htmlFor={`edit-${id}`}>
              Editar título de la tarea
            </label>

            <input
              id={`edit-${id}`}
              className="task-item__edit-input"
              type="text"
              value={draftTitle}
              maxLength={TASK_TITLE_MAX_LENGTH}
              onChange={(event) =>
                handleTitleChange(event.target.value)
              }
              aria-invalid={Boolean(error)}
              aria-describedby={
                error ? `edit-error-${id}` : undefined
              }
              autoFocus
            />

            {error && (
              <p
                id={`edit-error-${id}`}
                className="field-error"
                role="alert"
              >
                {error}
              </p>
            )}

            <div className="task-item__edit-actions">
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <>
            <h3 className="task-item__title">{title}</h3>
            <TaskStatusBadge status={status} />

            <p className="task-item__date">
              Actualizada:{' '}
              <time dateTime={updatedAt}>
                {formatTaskDate(updatedAt)}
              </time>
            </p>
          </>
        )}
      </div>

      {!isEditing && (
        <div
          className="task-item__actions"
          role="group"
          aria-label={`Acciones para ${title}`}
        >
          <Link
            className="button-link button-link--secondary"
            to={`/tasks/${id}`}
          >
            Ver detalle
          </Link>
          <button
            type="button"
            onClick={() => onToggleStatus(id)}
          >
            {status === 'pending' ? 'Completar' : 'Reabrir'}
          </button>

          <button
            type="button"
            onClick={handleStartEdit}
          >
            Editar
          </button>

          <button
            type="button"
            className="button-danger"
            onClick={() => onDeleteTask(id)}
          >
            Eliminar
          </button>
        </div>
      )}
    </article>
  );
}