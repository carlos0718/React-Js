# Curso React-Js de CoderHouse
# **PROYECTO REACT-JS: Tienda de Ropa online**
# `E-commerce de venta online de ropa, tanto para caballero y dama. Encontrás la ropa que te gusta por categorías.Selecciona las categorías desde la barra de navegación y encontrás el listado de articulos. Mira el detalle/descripción de cada prenda para ver si se ajusta a tu medida y gustos.Dale añadir al carrito para poder guardarlo, y luego finalizar tu compra.`

# Instalación de dependecias, ejecutar: `npm install `
### version 1.0.0
 
 * Se instala `npm init`
 * Se crea el package.json
 * Se crea la app con el comando ` npx create-react-app dress-carlosjesus`
 * Se se creó carpeta event-carlosjesus
 * ejecutar la app desde la consola con `npm start`.
### version 1.0.1

 * se agrega carpeta components
 * dentro de ella se crear archivo nav-bar.js
 * se crea el componente NavBar.
 * luego se exporta el componente Nav-Bar a archivo App.js
 * se instala bootstrap por linea de comando con npm : `npm install bootstrap`
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
 ### version 1.0.6
  * Se instala la dependencia: `npm install react-router-dom.` 
  * se importa {BrowserRouter, Route, Switch} de la dependecia anteriormente instalada, y se agrega en el navbar.
  * se configura las rutas: '/'(home), '/category/:id', '/item/:id'
  * en itemListContainer y itemDetailContainer se importa el hook {useParams}, tambien de la dependencia instalada.
  * se usa {useParams} para crear una variable dinámica que guarde el parametro {id} de la URL.
  * se consfigura links: brand navega al home '/', al clickear un articulo muestra la ruta '/item/:id' y muestra el detalle del producto,
    al clickear en una categoría del navbar muestra la ruta '/category/:id' y muestra el listado de articulos.
  * se hace el filtrado por categoria y se muestra el detalle para cada item.
  * se agrega gif de proyecto.
  * Por último, se agrega ruta de error, y componente que muestra mensaje de error.
### version 1.0.7
 * se importa el itemCount al itemDetail
 * al seleccionar 'Agregar al carrito', se renderiza el card detail con un nuevo boton de 'terminar compra'.
 * al seleccionar el boton de 'terminar compra', se navega al componenete, por ahora vacío de la ruta '/cart'
### version 1.0.8
 * se implementa React Contex para mantener el estado de compra del usuario.
 * se crea carpeta context dento de la carpeta src
 * se crea archivo CartContext.
 * se crea componente CartProvider
 * en el itemDetail, al clickear en el boton comprar se guarda el producto como objeto en el CartContext que se importó.
### version 1.0.9
 * se crea componente Cart
 * se agrega la ruta 'cart' al BrowserRouter.
 * se icono cartWidget se pone como Link para poder acceder a la cart.
 * se agrega mensaje en la cart con un link al landing cunado no haya item en el carrito.
 * se implementa hooks, totalPrecioCart y totalItem, que muestra la precio total final del carrito y la cantaidad final de los productos.
 * se hace tabla para mostrar cada item agreagdo, cada item un trash correspondiente para poder eliminarlo.

### version 1.1.0
 # Usando FIREBASE.
 * se instala firebase : `npm i firebase`  
 * se coencta la colección de firestore con el listado de items y con el detalle del item.
 * se hacen las llamadas de Firestore.
 * se implemente la categorización de items.

### version 1.1.0
# FIREBASE II
* se crea y se implementa componente Order.
* se crea formulario a completar con los datos del cliente.
* se crea conexión con firebase para generar la orden de compra, con el objeto buyer.
* se agrega control de stock con `batch`

## **Funcionamiento del e-commerce**
![](src/img/gifProyect.gif)