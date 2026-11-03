
import { useState } from 'react';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      return;
    }

    onAddTask(normalizedTitle);
    setTitle('');
  }

  return (
    <section
      className="panel"
      aria-labelledby="task-form-title"
    >
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">
            Registro
          </p>
          <h2 id="task-form-title">Nueva tarea</h2>
        </div>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="task-title">
          Título de la tarea
        </label>

        <div className="task-form__row">
          <input
            id="task-title"
            name="title"
            type="text"
            placeholder="Ejemplo: revisar documentación"
            maxLength={120}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <button type="submit">
            Agregar tarea
          </button>
        </div>
      </form>
    </section>
  );
}
