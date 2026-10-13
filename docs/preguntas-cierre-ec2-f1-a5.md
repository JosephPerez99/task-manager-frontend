# Preguntas de cierre - EC2 F1 A5

## 1. ¿Qué problema resuelve React al construir una interfaz?
React organiza la interfaz como componentes reutilizables y actualiza la vista cuando cambian los datos, lo que facilita construir aplicaciones con estructura y mantenimiento más simple.

## 2. ¿Qué es un componente?
Un componente es una pieza de la interfaz que encapsula una parte de la aplicación y devuelve JSX para mostrarla.

## 3. ¿Por qué los componentes comienzan con mayúscula?
Porque React reconoce por convención los componentes en PascalCase y los diferencia de elementos HTML normales.

## 4. ¿Qué diferencia existe entre HTML y TSX?
HTML es el lenguaje del navegador; TSX combina JavaScript/TypeScript con una sintaxis similar a HTML en la que se pueden usar expresiones, props y tipos.

## 5. ¿Para qué se utiliza className?
Se usa para asignar clases CSS a elementos JSX, porque en React la propiedad para clases es `className` y no `class`.

## 6. ¿Qué son las propiedades o props?
Las props son datos que un componente padre envía a un componente hijo para configurar su contenido o comportamiento.

## 7. ¿Cómo ayuda TypeScript a validar las propiedades?
TypeScript define los tipos esperados de las props y marca un error si se envían valores con un tipo incorrecto antes de ejecutar la aplicación.

## 8. ¿Cuál es la responsabilidad de App.tsx?
App.tsx coordina la estructura general de la interfaz e invoca a los componentes principales del administrador de tareas.

## 9. ¿Por qué la interfaz se dividió en varios componentes?
Para separar responsabilidades, reutilizar código y mantener cada sección más clara: encabezado, formulario, filtros, resumen y lista de tareas.

## 10. ¿Por qué los botones todavía están deshabilitados?
Porque esta actividad solo construye la interfaz estática; la lógica para crear, editar, completar o eliminar tareas será agregada en actividades posteriores.

## 11. ¿Qué componente consideras más reutilizable y por qué?
El componente `TaskItem` es muy reutilizable porque recibe datos diferentes como título y estado y puede representarse repetidas veces en la lista.

## 12. ¿Qué dificultad encontraste y cómo la resolviste?
La dificultad principal fue mantener la estructura visual y los nombres de clases consistentes con la guía. La resolví revisando paso a paso la práctica y siguiendo la estructura propuesta por la documentación para que cada componente quedara bien organizado.
