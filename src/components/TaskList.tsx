
import type { Task } from '../models/task.interface';
import { TaskItem } from './TaskItem';

// Recibo el arreglo de tareas desde el componente padre.
interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  // Muestro el total con el texto en singular o plural.
  const resultLabel =
    tasks.length === 1 ? '1 tarea' : `${tasks.length} tareas`;

  return (
    <section
      className="panel"
      aria-labelledby="task-list-title"
    >
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">
            Actividades
          </p>
          <h2 id="task-list-title">Tareas registradas</h2>
        </div>

        <span className="result-count">{resultLabel}</span>
      </div>

      {/* Si no hay tareas, muestro un mensaje; si hay, genero la lista. */}
      {tasks.length === 0 ? (
        <div className="empty-state" role="status">
          <h3>No hay tareas registradas</h3>
          <p>
            La colección está vacía. Las nuevas tareas
            aparecerán en esta sección.
          </p>
        </div>
      ) : (
        <div className="task-list" role="list">
          {/* Recorro el arreglo y creo un componente por cada tarea. */}
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))}
        </div>
      )}
    </section>
  );
}
