# Administrador de tareas - Frontend

Aplicación web para registrar y organizar tareas. El proyecto se desarrolla
con React, TypeScript, React Router y Vite; PNPM administra sus herramientas.
La interfaz está organizada en páginas y componentes, y la información se
conserva en el almacenamiento local del navegador.

Esta documentación describe el código que existe actualmente y complementa la
guía de cierre de la actividad en
[`docs/preguntas-cierre-ec2-f1-a5.md`](./docs/preguntas-cierre-ec2-f1-a5.md).

## Contenido

- [Requisitos y comandos](#requisitos-y-comandos)
- [Funciones de la aplicación](#funciones-de-la-aplicación)
- [Cómo se organiza y funciona](#cómo-se-organiza-y-funciona)
- [Estructura de carpetas y archivos](#estructura-de-carpetas-y-archivos)
- [Componentes, funciones y tipos](#componentes-funciones-y-tipos)
- [Glosario de palabras clave y conceptos](#glosario-de-palabras-clave-y-conceptos)
- [Notas sobre los datos](#notas-sobre-los-datos)

## Requisitos y comandos

Para usar el proyecto se necesitan Node.js y PNPM. Son programas que permiten
preparar y ejecutar la aplicación en la computadora.

```bash
pnpm install
pnpm dev
```

`pnpm install` descarga las herramientas que necesita el proyecto.
`pnpm dev` pone en marcha la aplicación para probarla; al ejecutarlo, la
terminal muestra una dirección que se abre en el navegador.

Comandos adicionales:

```bash
pnpm lint
pnpm build
pnpm preview
```

- `pnpm lint` revisa el código y avisa si encuentra errores comunes.
- `pnpm build` revisa el proyecto y prepara una versión lista para publicar en
  la carpeta `dist/`.
- `pnpm preview` permite abrir y probar esa versión preparada. Primero se debe
  ejecutar `pnpm build`.

> **En pocas palabras:** instala las herramientas una vez, usa `pnpm dev`
> mientras trabajas y ejecuta `pnpm build` cuando quieras preparar la versión
> final.

## Funciones de la aplicación

- Crear una tarea con un título de entre 3 y 120 caracteres.
- Navegar entre Inicio y Tareas sin recargar la página completa.
- Abrir el detalle de una tarea en una dirección propia.
- Mostrar un aviso cuando la dirección o tarea no existe.
- Consultar tareas iniciales de demostración o las guardadas previamente.
- Buscar por texto del título, sin distinguir entre mayúsculas y minúsculas.
- Filtrar por todas las tareas, pendientes o completadas.
- Ordenar por fecha de actualización, fecha de creación o título (A-Z).
- Marcar una tarea como completada y volver a abrirla.
- Editar el título o eliminar una tarea, con confirmación antes de borrarla.
- Consultar el total y la cantidad de tareas pendientes y completadas.
- Guardar las tareas en `localStorage` para conservarlas en el mismo navegador.
- Mostrar mensajes cuando no hay tareas o cuando los criterios no producen
  resultados.

> **Cómo funciona al usarla:** escribe una tarea y pulsa “Agregar tarea”.
> Desde Inicio puedes abrir Tareas, buscar, cambiar qué tareas aparecen,
> cambiar su estado, editarla o eliminarla. “Ver detalle” abre una página con
> la información completa de una tarea. Los números del resumen se actualizan
> con las tareas guardadas.

### Direcciones de la aplicación

| Dirección | Qué muestra |
| --- | --- |
| `/` | Inicio y resumen de tareas. |
| `/tasks` | Formulario, búsqueda, filtros, resumen y lista de tareas. |
| `/tasks/:taskId` | Información completa de la tarea cuyo identificador aparece en la dirección. |
| Cualquier otra dirección | Aviso de que la página no se encontró. |

En `/tasks/:taskId`, `:taskId` representa el identificador real de una tarea.
Por ejemplo, `/tasks/task-001` abre el detalle de la tarea `task-001`.

## Cómo se organiza y funciona

1. `index.html` contiene el espacio vacío de la página donde aparecerá la app.
2. `src/main.tsx` pone en marcha React, prepara la navegación y muestra la app
   en ese espacio.
3. `src/App.tsx` coordina las tareas, su guardado y las páginas que
   corresponden a cada dirección. También decide qué hacer cuando se agrega,
   edita o elimina una tarea.
4. `src/services/task-storage.service.ts` busca las tareas guardadas en el
   navegador y las actualiza cuando cambian. Si no encuentra tareas guardadas
   que pueda usar, carga los ejemplos del proyecto.
5. `src/services/task-query.service.ts` prepara la lista que se debe mostrar:
   busca, filtra y ordena las tareas según lo que eligió la persona.
6. `src/layouts/AppLayout.tsx` mantiene el encabezado, el menú y el pie de
   página mientras se cambia de vista.
7. Los archivos de `src/pages/` construyen Inicio, Tareas, el detalle y el
   aviso para direcciones que no existen.
8. Los archivos de `src/components/` construyen las piezas compartidas de las
   páginas: el encabezado, la navegación, el formulario, los filtros, el
   resumen y cada tarea.

> **Una comparación:** `App.tsx` es como la persona que coordina el trabajo;
> las páginas son las distintas secciones del sitio; el layout es el marco
> compartido; y los componentes son las piezas que aparecen dentro de cada
> sección.

## Estructura de carpetas y archivos

### Archivos de la raíz

| Ruta | Responsabilidad |
| --- | --- |
| `README.md` | Esta guía: explica cómo usar el proyecto y para qué sirve cada parte. |
| `package.json` | La lista de herramientas que usa el proyecto y las órdenes disponibles para instalarlas, revisarlas o ejecutarlas. |
| `pnpm-lock.yaml` | El registro de las versiones exactas que se instalaron, para que el proyecto use las mismas herramientas cada vez. |
| `index.html` | La página inicial del navegador. Incluye el título, el ícono y el espacio en el que aparece la aplicación. |
| `vite.config.ts` | Las instrucciones para que Vite sepa cómo iniciar y preparar esta aplicación React. |
| `eslint.config.js` | Las reglas que usa el proyecto para revisar el código y señalar errores comunes. |
| `tsconfig.json` | El archivo que reúne las instrucciones de revisión de TypeScript. |
| `tsconfig.app.json` | Las instrucciones para revisar los archivos de la aplicación dentro de `src/`. |
| `tsconfig.node.json` | Las instrucciones para revisar la configuración de Vite, que se ejecuta con Node.js. |
| `.gitignore` | La lista de archivos que Git no necesita guardar, como herramientas descargadas y resultados de compilación. |

### Carpetas

| Carpeta | Qué contiene y para qué sirve |
| --- | --- |
| `docs/` | Guías y explicaciones para entender la actividad. |
| `public/` | Imágenes y otros recursos que la página puede mostrar directamente. |
| `src/` | El código que hace funcionar la aplicación. |
| `src/assets/` | Imágenes y recursos que se pueden usar desde el código de la aplicación. |
| `src/components/` | Las piezas que forman la pantalla, como el encabezado, el menú, el formulario y cada tarea. |
| `src/data/` | Tareas de ejemplo que se muestran si todavía no hay tareas guardadas. |
| `src/layouts/` | La estructura que se repite al cambiar de página, como el encabezado, el menú y el pie. |
| `src/models/` | Las reglas que describen qué datos tiene una tarea y qué opciones se permiten. |
| `src/pages/` | El contenido de cada dirección: Inicio, Tareas, detalle o página no encontrada. |
| `src/services/` | Ayudantes que se encargan de buscar, ordenar y guardar las tareas. |
| `src/styles/` | Las reglas que controlan colores, tamaños, espacios y cómo se ve la página en distintas pantallas. |
| `src/utils/` | Pequeños ayudantes para tareas concretas, como revisar que un título sea válido. |

### Archivos de `docs/`, `public/` y `src/`

| Ruta | Responsabilidad |
| --- | --- |
| `docs/preguntas-cierre-ec2-f1-a5.md` | Preguntas y respuestas para repasar lo aprendido en la actividad. |
| `public/favicon.svg` | El pequeño dibujo que aparece como ícono de la página en el navegador. |
| `public/icons.svg` | Una colección de dibujos de iconos. Actualmente la aplicación no los muestra. |
| `src/assets/hero.png` | Una imagen disponible para el proyecto. Actualmente no aparece en la aplicación. |
| `src/main.tsx` | Enciende la aplicación, prepara la navegación y la coloca dentro del espacio de la página inicial. |
| `src/App.tsx` | Coordina las tareas, su guardado y las páginas que corresponden a cada dirección. |
| `src/components/AppHeader.tsx` | Muestra el título y una breve descripción de la aplicación. |
| `src/components/AppNavigation.tsx` | Muestra los enlaces de Inicio y Tareas e indica cuál está seleccionado. |
| `src/components/TaskForm.tsx` | Permite escribir una tarea nueva y comprueba que el título sirva antes de agregarla. |
| `src/components/TaskFilters.tsx` | Permite buscar tareas, elegir cuáles ver y cambiar el orden de la lista. |
| `src/components/TaskSummary.tsx` | Muestra cuántas tareas hay en total, cuántas faltan y cuántas están listas. |
| `src/components/TaskList.tsx` | Muestra todas las tareas que coinciden con la búsqueda o avisa si no hay ninguna. |
| `src/components/TaskItem.tsx` | Muestra una tarea y sus botones para completarla, editarla o eliminarla. |
| `src/components/TaskStatusBadge.tsx` | Muestra con una etiqueta si la tarea está pendiente o completada. |
| `src/layouts/AppLayout.tsx` | Mantiene el encabezado, el menú, el espacio de la página elegida y el pie de página. |
| `src/pages/HomePage.tsx` | Presenta la bienvenida, un enlace para administrar tareas y el resumen. |
| `src/pages/TasksPage.tsx` | Agrupa el formulario, los filtros, el resumen y la lista de tareas. |
| `src/pages/TaskDetailPage.tsx` | Busca la tarea indicada en la dirección y muestra sus datos; permite volver o eliminarla. |
| `src/pages/NotFoundPage.tsx` | Informa que no se encontró una página o tarea y ofrece volver a Inicio. |
| `src/data/tasks.ts` | Contiene seis tareas de ejemplo para que la aplicación tenga contenido al empezar. |
| `src/models/task.interface.ts` | Describe qué información debe tener cada tarea y cuáles son sus estados posibles. |
| `src/models/task-view.types.ts` | Describe las opciones que se pueden elegir para buscar, filtrar y ordenar. |
| `src/services/task-query.service.ts` | Encuentra las tareas que coinciden con lo que se escribió y las ordena. |
| `src/services/task-storage.service.ts` | Recuerda las tareas en el navegador y las recupera cuando se vuelve a abrir la página. |
| `src/utils/date.ts` | Presenta las fechas de las tareas en un formato fácil de leer. |
| `src/utils/task-validation.ts` | Comprueba que el título no esté vacío y que tenga una longitud permitida. |
| `src/styles/index.css` | Decide la apariencia de la aplicación: colores, tamaños, espacios y distribución. |
| `docs/preguntas-cierre-ec3-f1-a9.md` | Responde las preguntas de cierre sobre navegación, páginas y rutas de la actividad. |

> **Qué significa “actualmente no aparece”:** el archivo está en el proyecto,
> pero la pantalla no lo utiliza. Se puede conservar para usarlo más adelante.

## Componentes, funciones y tipos

### `src/App.tsx`

`App` es quien coordina la aplicación: guarda la lista de tareas que se está
usando y comunica a las demás partes qué deben mostrar o hacer.

- `handleAddTask(title)`: prepara una tarea nueva, le asigna la fecha y la
  agrega al principio de la lista.
- `handleToggleStatus(id)`: busca la tarea indicada y cambia su estado de
  pendiente a completada o de completada a pendiente.
- `handleEditTask(id, title)`: encuentra la tarea y reemplaza su título.
- `handleDeleteTask(id)`: pregunta si se desea borrar la tarea y solo la quita
  de la lista cuando la persona confirma. Informa si se borró para que la
  página de detalle pueda regresar a la lista.
- `handleClearCriteria()`: borra la búsqueda y devuelve los filtros y el orden
  a sus valores iniciales.
- `getVisibleTasks(...)`: pide la lista que corresponde a la búsqueda, el
  filtro y el orden elegidos.
- `useEffect(...)`: guarda automáticamente la lista cuando esta cambia.

> **Dicho de otra manera:** `tasks` es la libreta con todas las tareas.
> `query`, `filter` y `sortBy` son las opciones para encontrar y acomodar lo
> que se ve. El resumen cuenta toda la libreta, aunque haya tareas ocultas por
> los filtros.

### Componentes de `src/components/`

Un componente es una pieza de la pantalla. Tener la pantalla dividida en piezas
permite entender y modificar cada parte por separado.

- **`AppHeader()`**: muestra el título y la descripción que aparecen arriba
  en la página.
- **`AppNavigation()`**: muestra los enlaces para ir a Inicio o Tareas y marca
  el que corresponde a la dirección actual.
- **`TaskForm({ onAddTask })`**: muestra dónde escribir una tarea. Cuando se
  pulsa el botón, comprueba el título y avisa a `App` para que lo agregue.
  `handleTitleChange(value)` recoge lo que se escribe; `handleSubmit(event)`
  responde al envío del formulario.
- **`TaskFilters(props)`**: reúne los controles para buscar, escoger el estado
  y ordenar la lista. Cuando se cambia una opción, avisa a `App`; el botón
  “Limpiar filtros” devuelve esas opciones a su estado inicial.
- **`TaskSummary({ tasks })`**: cuenta las tareas y muestra los totales de
  pendientes y completadas.
- **`TaskList(props)`**: decide qué mostrar: un aviso si no hay resultados o
  una fila por cada tarea encontrada.
- **`TaskItem(props)`**: muestra una tarea y sus acciones. Al editar, permite
  abrir su detalle o cambiar el título. `handleStartEdit()` abre la edición;
  `handleCancel()` descarta los cambios sin guardar;
  `handleTitleChange(value)` recoge el texto nuevo, y
  `handleSave(event)` lo revisa y guarda si está bien.
- **`formatTaskDate(value)`**: presenta la fecha en un formato fácil de leer
  en español de México.
- **`TaskStatusBadge({ status })`**: convierte el estado guardado en la palabra
  visible “Pendiente” o “Completada”.

Los nombres que terminan en `Props`, como `TaskFormProps` o `TaskListProps`,
son listas de lo que cada pieza de pantalla necesita recibir. Por ejemplo, la
lista necesita las tareas y las acciones para cada una. Esto ayuda a detectar
si falta algún dato o si se envía algo equivocado.

### Páginas y marco compartido

- **`AppLayout()`**, en `src/layouts/AppLayout.tsx`: muestra el encabezado, el
  menú, el contenido de la página elegida y el pie de página. El marco queda
  igual mientras cambia el contenido central.
- **`HomePage({ tasks })`**: presenta una bienvenida, el resumen de tareas y
  un enlace para abrir la administración.
- **`TasksPage(props)`**: reúne el formulario y las herramientas existentes
  para administrar las tareas. Recibe los datos y las acciones desde `App`;
  no crea una segunda lista independiente.
- **`TaskDetailPage({ tasks, onDeleteTask })`**: lee el identificador de la
  dirección, encuentra la tarea y presenta su título, estado e historial de
  fechas. Si se confirma la eliminación, vuelve a Tareas.
- **`NotFoundPage({ title, message })`**: muestra un mensaje cuando la
  dirección no existe o cuando no se encuentra la tarea pedida. Permite volver
  a Inicio.
- **`formatTaskDate(value)`**, en `src/utils/date.ts`: convierte la fecha
  guardada en una fecha y hora legibles para la pantalla.

### Ayudantes y formas de los datos

Estos archivos contienen tareas que no son una parte visible de la página:
comprueban los títulos, encuentran tareas y las guardan. Los modelos describen
qué información puede tener cada tarea. React Router permite elegir qué página
aparece en cada dirección.

- **`validateTaskTitle(value)`**, en `src/utils/task-validation.ts`: revisa que
  el título tenga entre 3 y 120 caracteres, sin contar espacios al principio
  y al final. Devuelve una explicación si hay un problema y `null` si se puede
  usar.
- **`getVisibleTasks(tasks, options)`**, en
  `src/services/task-query.service.ts`: encuentra los títulos que coinciden,
  deja solo los estados elegidos y organiza el resultado. No cambia la lista
  original de tareas.
- **`compareTasks(firstTask, secondTask, sortBy)`**: ayudante interno que
  decide cuál de dos tareas va primero según la opción elegida.
- **`loadTasks(fallbackTasks)`**, en
  `src/services/task-storage.service.ts`: busca las tareas guardadas y revisa
  que se puedan usar. Si no las encuentra o están dañadas, empieza con las
  tareas de ejemplo.
- **`saveTasks(tasks)`**: guarda la lista para que siga disponible al volver a
  abrir la página. Si el navegador no puede guardarla, deja un aviso en la
  consola.
- **`isTaskStatus(value)`**: comprueba que el estado guardado sea uno de los
  dos que entiende la aplicación.
- **`isTask(value)`**: revisa que una tarea guardada tenga todos sus datos y
  fechas reconocibles.
- **`Task`**: describe la información que se guarda para cada tarea: su
  identificador, título, estado y fechas.
- **`TaskStatus`**: limita el estado a pendiente o completada.
- **`TaskFilter`**: describe las opciones del filtro: todas, pendientes o
  completadas.
- **`TaskSort`**: describe las opciones para ordenar: por actualización, por
  creación o por título.
- **`TaskViewOptions`**: reúne las opciones que la lista necesita para buscar,
  filtrar y ordenar.
- **`tasks`**: las seis tareas de ejemplo que se muestran la primera vez, o
  cuando no se pueden recuperar tareas guardadas.

## Glosario de palabras clave y conceptos

En el código aparecen palabras cortas que indican qué hacer. Esta tabla las
explica con palabras sencillas y cuenta para qué se usan aquí.

| Palabra o concepto | Significado en este proyecto |
| --- | --- |
| **React** | Herramienta usada para armar la pantalla con piezas pequeñas, como el formulario y la lista. |
| **TypeScript** | Ayuda a revisar que los datos se usen de la manera esperada, como verificar que el estado de una tarea sea uno de los permitidos. |
| **Vite** | La herramienta que permite abrir la aplicación mientras se trabaja y preparar una versión para compartir. |
| **PNPM** | El programa que descarga las herramientas del proyecto y permite ejecutar órdenes como `pnpm dev`. |
| **Componente** | Una pieza de la pantalla. Por ejemplo, `TaskList` se ocupa de mostrar la lista de tareas. |
| **JSX / TSX** | Una forma de escribir lo que aparece en la pantalla junto con el código que lo controla. Los archivos de React usan `.tsx`. |
| **Props** | La información o las acciones que una pieza de la pantalla recibe de otra. Es como pasarle a la lista las tareas que debe mostrar. |
| **Estado (`state`)** | La información que la aplicación recuerda mientras está abierta, como el texto que se está buscando. |
| **`useState`** | Una herramienta de React para recordar un dato y actualizar la pantalla cuando ese dato cambia. |
| **`useEffect`** | Una herramienta de React que realiza una tarea cuando cambian los datos. Aquí ayuda a guardar la lista cuando se modifica. |
| **React Router** | La herramienta que permite cambiar entre Inicio, Tareas y Detalle sin volver a cargar toda la página. |
| **`BrowserRouter`** | Activa la navegación y conecta las direcciones con el historial del navegador. Se prepara una sola vez al iniciar la app. |
| **`Routes` y `Route`** | Son la lista de direcciones que entiende la aplicación y la página que se muestra para cada una. |
| **Layout** | El marco que comparten varias páginas, como el encabezado, el menú y el pie. |
| **`Outlet`** | El espacio dentro del marco donde aparece la página elegida. |
| **Ruta índice** | La página que se muestra al entrar a la dirección principal `/`. Aquí es Inicio. |
| **Ruta dinámica (`:taskId`)** | Una dirección con un espacio variable. En `/tasks/:taskId`, ese espacio indica qué tarea abrir. |
| **`Link`** | Un enlace para moverse a otra página de la app sin recargarla por completo. |
| **`NavLink`** | Un enlace de navegación que también permite marcar visualmente la página actual. |
| **`useParams`** | Lee el identificador que aparece en la dirección de detalle para buscar la tarea correcta. |
| **`useNavigate`** | Permite cambiar de página después de una acción, como volver a la lista cuando se elimina una tarea. |
| **SPA / página única** | Aplicación que cambia sus páginas dentro del navegador sin pedir que se cargue de nuevo el sitio completo en cada clic. |
| **Página 404** | Aviso que explica que la dirección solicitada no existe. |
| **Hook** | El nombre que reciben herramientas especiales de React, como `useState`, para recordar datos o realizar tareas. |
| **`interface`** | Una lista que describe qué datos debe tener algo. La tarea, por ejemplo, debe tener título, estado e identificador. |
| **`type`** | Una manera de dar nombre a una regla sobre los datos, como la lista de estados permitidos para una tarea. |
| **Tipo unión (`|`)** | Una lista de opciones permitidas. En esta aplicación, el estado de una tarea puede ser pendiente o completada. |
| **`Task[]`** | Significa “una lista de tareas”; los corchetes indican que puede haber varias. |
| **`unknown`** | Significa “todavía no sé qué contiene este dato”. La aplicación lo revisa antes de usar información recuperada del navegador. |
| **`null`** | Significa “no hay nada aquí”. La revisión del título devuelve esto cuando no encuentra ningún problema. |
| **`const`** | Da un nombre a un dato que no se va a reemplazar por otro. Por ejemplo, el texto escrito en el formulario se guarda con un nombre. |
| **`function`** | Marca el inicio de una acción con nombre, como agregar una tarea o comprobar un título. |
| **`return`** | Indica lo que una función entrega al terminar. Un componente entrega la parte de la pantalla que debe mostrarse. |
| **`if`** | Significa “si esto ocurre, haz lo siguiente”. Se usa, por ejemplo, para comprobar un título antes de guardarlo. |
| **`switch`, `case` y `default`** | Sirven para escoger qué hacer entre varias opciones, como decidir cómo ordenar las tareas. |
| **`try` y `catch`** | Permiten intentar una acción y decidir qué hacer si falla. Se usan al guardar y leer tareas en el navegador. |
| **`throw`** | Detiene el inicio de la aplicación con un error si falta un elemento imprescindible de la página; así se puede identificar por qué no arrancó. |
| **`new`** | Crea algo nuevo, como la fecha de una tarea recién agregada. |
| **`typeof`** | Pregunta qué clase de dato se recibió, por ejemplo si el título guardado realmente es texto. |
| **`as`** | Le comunica a TypeScript qué tipo de dato se espera. No cambia el dato por sí solo. |
| **`is` en `value is Task`** | Indica que una comprobación confirma que el dato tiene todo lo necesario para ser una tarea. |
| **`void`** | Indica que una acción no necesita entregar un resultado; por ejemplo, una función que solo cambia el estado de una tarea. |
| **`true` y `false`** | Representan “sí” y “no” en una comprobación. Se usan, por ejemplo, para decidir si un botón debe estar disponible. |
| **`import` / `export`** | Permiten compartir el código: un archivo ofrece una función y otro la trae para utilizarla. |
| **`import type`** | Trae solo una regla sobre los datos, no una función que se ejecute en la aplicación. |
| **Función flecha (`=>`)** | Una forma corta de escribir una acción. Se usa para decir qué hacer al pulsar un botón o cambiar un campo. |
| **Callback** | Una acción que se entrega a otra parte para que la realice cuando haga falta; por ejemplo, avisar a `App` cuando se agrega una tarea. |
| **Evento** | Algo que sucede en la página, como escribir, pulsar un botón o enviar el formulario. |
| **Manejador (`handler`)** | La acción que responde a algo que ocurrió; por ejemplo, `handleSubmit` responde cuando se envía el formulario. |
| **`map()`** | Repite una acción por cada elemento de una lista. Aquí crea una fila en pantalla para cada tarea. |
| **`filter()`** | Deja pasar solo los elementos que cumplen una condición. Aquí ayuda a mostrar solo las tareas pendientes, por ejemplo. |
| **`sort()`** | Acomoda una lista en el orden elegido, como poner primero las tareas más recientes. |
| **Mostrar según una condición** | Permite enseñar una cosa u otra según lo que pase, como mostrar un aviso cuando la lista está vacía. |
| **Llaves `{...}` en la pantalla** | Indican que se va a mostrar un dato o ejecutar una acción dentro del contenido de la página. |
| **`className`** | El nombre de un grupo de estilos. Sirve para indicar cómo debe verse un elemento de la pantalla. |
| **`key`** | Un identificador que permite distinguir cada tarea de las demás, aunque sus títulos sean iguales. |
| **Spread (`...`)** | Una forma de copiar los datos existentes y cambiar solo una parte, como el título de una tarea. |
| **`localStorage`** | Un pequeño espacio del navegador donde la aplicación recuerda las tareas en esa computadora. No las comparte con otros dispositivos. |
| **JSON** | Una forma de convertir la lista en texto para poder guardarla y recuperarla después. |
| **ISO 8601** | Una forma estándar de escribir fechas para que la aplicación pueda guardarlas y ordenarlas correctamente. |
| **`aria-*`** | Información adicional para que las herramientas de accesibilidad puedan explicar mejor los controles de la página. |
| **Adaptable** | Significa que la página acomoda sus elementos para verse bien en una computadora, tableta o teléfono. |
| **ESLint** | Un revisor automático que avisa cuando encuentra detalles que conviene corregir en el código. |

## Notas sobre los datos

- Cada tarea tiene `id`, `title`, `status`, `createdAt` y `updatedAt`.
- Los valores del estado en el código son `pending` (pendiente) y `completed`
  (completada).
- Las tareas se guardan bajo la clave `task-manager.tasks` del `localStorage`.
  Limpiar los datos del sitio en el navegador elimina esa colección guardada;
  al volver a abrir la aplicación se cargarán las tareas iniciales.
- Los datos locales pertenecen al navegador y al origen donde se ejecuta la
  aplicación; no hay un servidor ni una base de datos remota en este proyecto.
- La carpeta `dist/` se genera con `pnpm build`; no es código fuente y está
  excluida del control de versiones mediante `.gitignore`.
