
import { useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { TaskFilters } from './components/TaskFilters';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskSummary } from './components/TaskSummary';
import { tasks as initialTasks } from './data/tasks';
import type { Task } from './models/task.interface';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => [...initialTasks]);

  // Registro una tarea nueva.
  function handleAddTask(title: string) {
    const now = new Date().toISOString();

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  // Cambio entre pendiente y completada.
  function handleToggleStatus(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === 'pending' ? 'completed' : 'pending',
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    );
  }

  // Actualizo el título sin cambiar el identificador ni la fecha de creación.
  function handleEditTask(id: string, title: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    );
  }

  // Pido confirmación antes de eliminar.
  function handleDeleteTask(id: string) {
    const taskToDelete = tasks.find((task) => task.id === id);

    if (!taskToDelete) {
      return;
    }

    const confirmed = window.confirm(
      `¿Seguro que deseas eliminar la tarea "${taskToDelete.title}"?`,
    );

    if (!confirmed) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id),
    );
  }

  return (
    <div className="app-shell">
      <AppHeader />

      <main className="app-main">
        <TaskForm onAddTask={handleAddTask} />
        <TaskFilters />

        <TaskSummary tasks={tasks} />

        <TaskList
          tasks={tasks}
          onToggleStatus={handleToggleStatus}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>

      <footer className="app-footer">
        <div className="app-footer__content">
          <p>Administrador de tareas - Frontend EC2</p>
        </div>
      </footer>
    </div>
  );
}
