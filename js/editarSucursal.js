document
  .getElementById("formEditarSucursal")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const actualizacionSucursal = {
      id: formData.get("id"),
      nombre: formData.get("nombre"),
    };

    fetch('https://bsite.net/metalflap/td-sucursal', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(actualizacionSucursal),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar sucursal");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Sucursal actualizada exitosamente");
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
