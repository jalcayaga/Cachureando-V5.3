document
  .getElementById("formEditarProducto")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const idProducto = formData.get("id");
    const actualizacionProducto = {
      nombre: formData.get("nombre"),
      precio: formData.get("precio"),
      link: formData.get("link"),
      stock: formData.get("stock"),
      etiqueta: formData.get("etiqueta"),
      descripcion: formData.get("descripcion"),
      idCategoria: formData.get("idCategoria"),
      idSucursal: formData.get("idSucursal"),
    };

    fetch(`https://bsite.net/metalflap/td-producto/${idProducto}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(actualizacionProducto),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el producto");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Producto actualizado exitosamente");
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

//   En este código, primero agregamos un event listener al formulario con id "formEditarProducto" 
// que se ejecutará cuando se haga submit. Luego, se previene la acción por defecto del submit 
// y se crea un objeto "actualizacionProducto" con los datos actualizados del formulario. Finalmente,
//  se hace una petición PUT a la API con los datos actualizados y se maneja la respuesta de la petición.
