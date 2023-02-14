fetch("https://bsite.net/metalflap/td-producto")
.then(res => res.json())
.then(data => {
  let productos = document.getElementById("productos");
  data.forEach(producto => {
    productos.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.link}</td>
        <td>${producto.stock}</td>
        <td>${producto.etiqueta}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.idCategoria}</td>
        <td>${producto.idSucursal}</td>
      </tr>
    `;
  });
})
.catch(error => console.error(error));
