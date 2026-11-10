# Preguntas de cierre - EC3 F1 A9

## 1. ¿Qué es una aplicación de página única?

Es una aplicación que puede mostrar distintas secciones sin volver a cargar
completamente la página cada vez que navegamos.

## 2. ¿Qué responsabilidad tiene `BrowserRouter`?

Permite que la aplicación conozca la dirección actual y use los botones Atrás
y Adelante del navegador para cambiar de vista.

## 3. ¿Cuál es la diferencia entre `Routes` y `Route`?

`Routes` reúne las direcciones disponibles. Cada `Route` indica qué pantalla
mostrar cuando la dirección coincide.

## 4. ¿Qué es una ruta índice?

Es la pantalla que se muestra en la dirección principal `/`. En este proyecto,
la ruta índice muestra Inicio.

## 5. ¿Qué beneficio ofrece un layout?

Permite compartir partes que se repiten, como el encabezado, el menú y el pie
de página, sin volver a escribirlos en cada pantalla.

## 6. ¿Qué función cumple `Outlet`?

Es el espacio del layout donde aparece la pantalla que corresponde a la
dirección actual.

## 7. ¿Qué diferencia existe entre `Link` y `NavLink`?

Ambos permiten navegar dentro de la aplicación sin recargarla. `NavLink`
también permite reconocer cuál opción del menú corresponde a la página actual.

## 8. ¿Por qué no se utilizan enlaces `a` para navegar internamente?

Porque un enlace tradicional vuelve a cargar la página completa. `Link` y
`NavLink` cambian de vista sin interrumpir la aplicación.

## 9. ¿Qué representa `:taskId`?

Es el espacio variable de la dirección `/tasks/:taskId`. Al abrir una tarea,
ese espacio se reemplaza por su identificador.

## 10. ¿Cómo se recupera un parámetro dinámico?

Se utiliza `useParams` dentro de la página de detalle. El valor obtenido sirve
para encontrar la tarea con el mismo identificador.

## 11. ¿Cuándo debe utilizarse `useNavigate`?

Cuando la aplicación debe cambiar de página como resultado de una acción. En
este proyecto se usa para regresar a la lista después de confirmar que se
eliminó una tarea desde su detalle.

## 12. ¿Qué función cumple la ruta `*`?

Es la respuesta para cualquier dirección que no coincida con las demás rutas.
Muestra la página que informa que no se encontró el sitio solicitado.

## 13. ¿Por qué el estado continúa administrado por `App`?

Porque `App` comparte las tareas con varias pantallas. Mantener una sola lista
evita que Inicio, Tareas y Detalle tengan datos distintos.

## 14. ¿Por qué `localStorage` permanece en esta actividad?

Porque todavía no se conecta la aplicación a un servidor. `localStorage`
conserva las tareas en el navegador mientras se prepara la integración con una
API en la actividad siguiente.

## 15. ¿Qué dificultad encontraste y cómo la resolviste?

Una dificultad fue separar la pantalla en varias páginas sin perder las
acciones y tareas que ya funcionaban. Se resolvió dejando la lista principal
en `App` y pasando a cada página los datos y las acciones que necesita.
