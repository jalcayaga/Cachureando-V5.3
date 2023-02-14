document.getElementById("formEliminarProducto").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const idProducto = formData.get("id");
  
    fetch(`https://bsite.net/metalflap/td-producto/${idProducto}`, {
      method: "DELETE"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al eliminar el producto");
        }
        return response.json();
      })
      .then(data => {
        console.log("Producto eliminado exitosamente");
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  });
  

//   En este código, primero agregamos un event listener al formulario con id "formEliminarProducto" 
// que se ejecutará cuando se haga submit. Luego, se previene la acción por defecto del submit y se obtiene
//  el ID del producto a eliminar del formulario. Finalmente, se hace una petición DELETE a la API con el ID 
//  del producto y se maneja la respuesta de la petición.