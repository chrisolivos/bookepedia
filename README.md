# Bookepedia

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Boiler Plate](#4-boiler-plate)
* [5. Proceso de interacción](#5-proceso-de-interacción)


***

## 1. Preámbulo

El universo de la lectura es muy impresionable, puedes viajar a lugares mágicos e inesperados, puedes vivir un sin fin de aventuras, también puedes ser parte de la historia de algún personaje, puede darte mucha información, conocimientos; es así como un libro te lleva a volar y desconecta de la realidad. 
 
## 2. Resumen del proyecto
Bookepedia, es una aplicación pensada en la personas que gustan de la lectura, aquí podrán encontrar datos importantes de sus libros favoritos y también podrán agregar un libro que recomienden.

## 3. Historias de Usuario

Historia 1:

Quiero: Poder ver la relación de todos los libros.

Para: Saber su nombre, autor y otros datos.

Criterios de Aceptación:
La página debe mostrar todos los libros con su nombre, ISBN.

Definición de terminado:
Que el usuario pueda visualizar toda la lista de los libros.

Historia 2:

Quiero: Poder ver el detalle de un libro al darle click.

Para: Para ver los datos adicionales.

Criterios de Aceptación:
La página debe mostrar los detalles del libro al dar click.

Definición de terminado:
Que el usuario pueda visualizar los detalles del libro al dar click.

Historia 3:

Quiero: Poder realizar búsquedas y filtrar información.

Para: Poder encontrar más rápido un libro. 

Criterios de Aceptación:
La página debe permitir al usuario buscar y filtrar libros. 

Definición de terminado:
Que el usuario pueda visualizar el libro buscado o filtrado. 

Historia 4:

Quiero: Poder ordenar los libros. 

Para: Poder verlos en el orden deseado.

Criterios de Aceptación:
La página debe permitir ordenar los libros (Asc -Desc)

Definición de terminado:
Que el usuario pueda ordenar los libros (Asc -Desc).

Historia 5:

Quiero: Poder ver mi listado de libros favoritos

Para: Ver la relación de libros marcados como favoritos. 

Criterios de Aceptación:
La página debe permitir al usuario visualizar los libros que tiene marcados como favoritos.

Definición de terminado:
Que el usuario pueda visualizar los libros que marcó como favoritos. 

## 4. Boiler Plate
.

├── src

|  ├── components 

|  |  ├── booksView.jsx

|  |  ├── dashboardView.jsx

|  |  ├── favoriteBooks.jsx

|  |  └── newBooks.jsx

|  ├── images

|  |  ├── screen

|  |  |  ├── addbook.png

|  |  |  ├── dashboard.png

|  |  |  ├── detailsView.png

|  |  |  ├── favorites.png

|  |  |  ├── filter.png

|  |  |  └── home.png

|  |  └── background.jpg

|  ├── styles

|  |  ├── booksView.css

|  |  ├── dashboardView.css

|  |  ├── favoriteBooks.css

|  |  └── newBooks.css

|   └── test

|   ├── app.test.js

├── .gitignore

├── package-lock.json

├── package.json

├── README.md

├── tailwind.config.js

## 5. Proceso de interacción
-	Home: La primera pantalla nos permitirá acceder dandole click al botón Start

Home:

![Home](https://github.com/chrisolivos/bookepedia/blob/main/src/images/screen/home.png)


-	Dashboard: En esta vista, encontraremos la opción por seleccionada por defecto: Books, en la cual podemos ver el listado general de los libros.
Acá también podemos visualizar las opciones: Add Book y favorites.
Encontraremos el botón Home en la esquina superior derecha, el cual nos permite regresar a la vista principal.

Dashboard:

![Dashboard](https://github.com/chrisolivos/bookepedia/blob/main/src/images/screen/dashboard.png)

-	Details Book: En la vista Books, podemos dar click en algún libro del listado y nos mostrará el detalle de ese libro.

Details Book:

![Details Book](https://github.com/chrisolivos/bookepedia/blob/main/src/images/screen/detailsView.png)

-	Filer: En la vista Books, podemos dar click en los 3 puntos que aparecen en el titulo y se desplegarán opciones, ahí encontraremos la opción para filtrar

Filter:

![Filter](https://github.com/chrisolivos/bookepedia/blob/main/src/images/screen/filter.png)

-	Add Books: En la vista Add Book, podemos agregar un libro, aquí es necesario ingresar todos los datos y también ingresar el ISBN en el formato indicado.

Add Books:

![Add Books](https://github.com/chrisolivos/bookepedia/blob/main/src/images/screen/addbook.png)

-	Favorites: En la vista Favorites, podemos visualizar los libros marcados como favoritos por el usuario.

Favorites:

![Favorites](https://github.com/chrisolivos/bookepedia/blob/main/src/images/screen/favorites.png)



