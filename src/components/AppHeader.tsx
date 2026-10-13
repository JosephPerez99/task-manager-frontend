
/*
  Componente: AppHeader
  Función: Mostrar el encabezado principal de la aplicación,
  incluyendo el nombre de la materia, el título y una descripción.
*/

export function AppHeader() {
  return (
    // Contenedor semántico del encabezado
    <header className="app-header">
      {/* Contenedor del contenido del encabezado */}
      <div className="app-header__content">

        {/* Nombre de la materia */}
        <p className="eyebrow">
          Diseño Frontend con Frameworks
        </p>

        {/* Título principal de la aplicación */}
        <h1>Administrador de tareas</h1>

        {/* Descripción breve del propósito de la aplicación */}
        <p className="app-header__description">
          Organiza las actividades pendientes y consulta
          el avance del trabajo.
        </p>

      </div>
    </header>
  );
}
