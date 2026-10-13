
/*
  Componente principal: App
  Función: Organizar y mostrar todos los componentes
  del administrador de tareas.
*/

import { AppHeader } from './components/AppHeader';
import { TaskFilters } from './components/TaskFilters';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskSummary } from './components/TaskSummary';

export default function App() {
  return (
    <div className="app-shell">
      {/* Encabezado principal */}
      <AppHeader />

      {/* Contenido principal de la aplicación */}
      <main className="app-main">
        <TaskForm />
        <TaskFilters />

        {/* Resumen de las tres tareas de ejemplo */}
        <TaskSummary total={3} pending={2} completed={1} />

        {/* Lista de tareas registradas */}
        <TaskList />
      </main>

      {/* Pie de página */}
      <footer className="app-footer">
        <div className="app-footer__content">
          <p>Administrador de tareas - Frontend EC2</p>
        </div>
      </footer>
    </div>
  );
}
