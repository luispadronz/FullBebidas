# Proyecto de Ecommerce de Bebidas Alcohólicas en React JS

Este es mi primer proyecto de ecommerce desarrollado en React JS. El proyecto se centra en la venta de bebidas alcohólicas y no alcohólicas. Utilicé la librería Bootstrap para el diseño de la interfaz de usuario.

## Características

- Catálogo de 20 bebidas, incluyendo 18 con alcohol 🍹 y 2 sin alcohol 🥤.
- Uso de Bootstrap para el diseño y la navegación de la interfaz.
- Banner en la página principal con una imagen descargada.
- Listado de productos con imágenes, precios, nombres y descripciones.
- Categorización de productos visible en la NavBar.
- Uso de Firestore para almacenar y recuperar datos de productos.

## Componentes Principales

- **CartContext**: Proporciona funciones para gestionar el carrito de compras, como agregar, quitar y vaciar artículos.

- **ItemDetailContainer**: Lógica para mostrar los detalles de un producto específico obtenido desde Firebase.

- **ItemDetail**: Componente de presentación para mostrar los detalles de un producto.

- **ItemListContainer**: Lógica para mostrar el listado completo de productos obtenidos desde Firebase.

- **ItemList**: Componente de presentación que muestra la lista de productos.

- **ItemCart**: Muestra el contenido del carrito de compras, con funciones para quitar y sumar productos. 🛒

- **ItemCount**: Componente contador para ajustar la cantidad de productos en el carrito.

- **Item**: Renderiza los productos dentro del carrito de compras. 💰

## Configuración

El proyecto utiliza Firebase para la gestión de datos. Se ha configurado el acceso a Firestore para obtener y mostrar información sobre los productos.

## Estilos

Se han aplicado estilos descargados de Bootstrap para lograr un diseño atractivo y responsivo en todo el sitio web.

## Navegación

Se han utilizado las BrowserRoutes para permitir la navegación entre las distintas secciones de la aplicación.

---

¡Este proyecto ha sido una emocionante introducción a React JS y el desarrollo de aplicaciones web! Si tienes preguntas o necesitas más información, no dudes en contactarme via mail luispadron.201@gmail.com
