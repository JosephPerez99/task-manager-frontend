
/*
  Componente: TaskSummary
  Función: Mostrar el total de tareas, cuántas están pendientes
  y cuántas ya se completaron.
*/

// Define los datos que recibirá el componente.
interface TaskSummaryProps {
  total: number;
  pending: number;
  completed: number;
}

export function TaskSummary({
  total,
  pending,
  completed,
}: TaskSummaryProps) {
  return (
    // Resumen general de las tareas
    <section
      className="summary-grid"
      aria-label="Resumen de tareas"
    >
      {/* Cantidad total */}
      <article className="summary-card">
        <span>Total</span>
        <strong>{total}</strong>
      </article>

      {/* Cantidad de tareas pendientes */}
      <article className="summary-card">
        <span>Pendientes</span>
        <strong>{pending}</strong>
      </article>

      {/* Cantidad de tareas completadas */}
      <article className="summary-card">
        <span>Completadas</span>
        <strong>{completed}</strong>
      </article>
    </section>
  );
}
