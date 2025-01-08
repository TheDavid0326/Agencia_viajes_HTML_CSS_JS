## Agencia de viajes por Europa

Este proyecto es una sencilla aplicación web que permite al usuario explorar información sobre diferentes ciudades europeas. 

**Características:**

* **Interfaz intuitiva:** Utiliza enlaces para navegar entre las ciudades.
* **Contenido dinámico:** Muestra información específica de cada ciudad (título, subtítulo y descripción) al hacer clic en el enlace correspondiente.
* **Diseño responsive:** Se adapta a diferentes tamaños de pantalla.

**Tecnologías utilizadas:**

* **HTML:** Estructura la página web y los enlaces.
* **CSS:** Estiliza la apariencia de la página, incluyendo la navegación y el contenido.
* **JavaScript:** Maneja la interacción del usuario, carga el contenido dinámico y actualiza la interfaz.
* **Módulos ES6:** Utiliza la sintaxis de importación/exportación de ES6 para modularizar el código.

**Funcionamiento:**

1. El código importa los datos de las ciudades desde un archivo externo (`ciudades.js`).
2. Se seleccionan los enlaces de navegación en el DOM.
3. Al hacer clic en un enlace:
    * Se remueve la clase "active" de todos los enlaces.
    * Se agrega la clase "active" al enlace seleccionado.
    * Se obtiene el objeto de la ciudad correspondiente utilizando la función `cityObject()`.
    * Se actualiza el contenido de la página con los datos de la ciudad seleccionada.

**Aprendizajes clave:**

* **Manipulación del DOM:** Interacción con elementos HTML para agregar y eliminar clases, y actualizar el contenido.
* **Eventos:** Uso del evento `click` para responder a las acciones del usuario.
* **Módulos ES6:** Importación y exportación de datos entre archivos JavaScript.
* **Manejo de objetos:** Creación y uso de objetos para almacenar y acceder a la información de las ciudades.

* **Demostración:**
https://agencia-viajes-html-css-js.netlify.app/
