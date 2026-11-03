
import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Task } from '../models/task.interface';
import { TaskStatusBadge } from './TaskStatusBadge';

interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onEditTask: (id: string, title: string) => void;
  onDeleteTask: (id: string) => void;
}

function formatTaskDate(value: string): string {
  const date = new Date(value);

  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
  }).format(date);
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

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedTitle = draftTitle.trim();

    if (!normalizedTitle) {
      return;
    }

    onEditTask(id, normalizedTitle);
    setIsEditing(false);
  }

  function handleCancel() {
    setDraftTitle(title);
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
              maxLength={120}
              onChange={(event) => setDraftTitle(event.target.value)}
            />

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
          <button
            type="button"
            onClick={() => onToggleStatus(id)}
          >
            {status === 'pending' ? 'Completar' : 'Reabrir'}
          </button>

          <button
            type="button"
            onClick={() => {
              setDraftTitle(title);
              setIsEditing(true);
            }}
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
