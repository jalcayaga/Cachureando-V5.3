//clase que representa el producto:
class Producto {
    constructor(nombre, precio, link, stock, etiqueta, descripcion, idCategoria, idSucursal) {
      this.nombre = nombre;
      this.precio = precio;
      this.link = link;
      this.stock = stock;
      this.etiqueta = etiqueta;
      this.descripcion = descripcion;
      this.idCategoria = idCategoria;
      this.idSucursal = idSucursal;
    }
  }
//creamos un nuevo producto utilizando la clase que definimos anteriormente y llamamos la info desde el formulario:
document.getElementById("formProducto").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nuevoProducto = new Producto(
      0,
      formData.get("nombre"),
      formData.get("precio"),
      formData.get("link"),
      formData.get("stock"),
      formData.get("etiqueta"),
      formData.get("descripcion"),
      formData.get("idCategoria"),
      formData.get("idSucursal")
    );
    fetch('https://bsite.net/metalflap/td-producto', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoProducto)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
  
