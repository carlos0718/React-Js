# Curso React-Js de CoderHouse
# PROYECTO REACT-JS
### version 1.0.0
 
 * Se imstala npm init
 * Se crea el package.json
 * Se crea la app con el comando npx create-react-app dress-carlosjesus
 * Se se creó carpeta event-carlosjesus
 * ejecutar la app desde la consola con 'npm start'.
### version 1.0.1

 * se agrega carpeta components
 * dentro de ella se crear archivo nav-bar.js
 * se crea el componente NavBar.
 * luego se exporta el componente Nav-Bar a archivo App.js
 * se instala bootstrap por linea de comando con npm : npm install bootstrap
 * se usa bootstrap para hacer la barra de navegación.
### version 1.0.2
 * se agregar archivo cartWidget en la carpeta components.
 * se crea componente cartWidget.
 * se agrega imagen de carrito dentro de ella, y se importa.
 * luego se exporta cartWidget a nav-bar.
 * se agrega listContainer en la carpeta components.
 * se exporta a app.js para mostrarlo en la app.
### version 1.0.3
 * se agrega archivo itemCont.
 * se crea componente itemCont.
   se exporta al archivo itemListContainer y se monta dentro de ItemListContainer.
 * se usa props para usar asignar valores enteros al valor inicial y a stock.
 * se usa Hooks : useState().
 * y se hace funcional el cuadro de contador de articulos.
### version 1.0.4
 * Se agrega el archivo item.jsx e itemList.jsx, y se crea componentes correspondientes.
 * Se agrega array de objetos de articulos en el archivo itemListContainer.
 * se exporta item.jsx a itemList.jsx
 * luego el componente itemList se exporta a itemListContainer.
 * se usa useEffects para hacer la promesa y renderizar el listaldo de items despues de 2s.
 ### version 1.0.5
 * se crea archivo itemDetailContainer.jsx y se crea componente.
 * se crea archivo itemDetail.jsx y se crea componente
 * se harcodea el detalle de articulo en funcion getItems.
 * se usa useEffect para mostrar getItems despues de 2s.