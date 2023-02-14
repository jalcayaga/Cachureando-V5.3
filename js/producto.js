fetch("https://63ebdf4632a081172393611a.mockapi.io/api/v1/producto")
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
        <td>${producto.idSucursal}</td>
        <td>
        <button type="button" class="btn btn-primary editar" data-bs-toggle="modal" data-bs-target="#modalEditar" data-id="${producto.id}">Editar</button>
        <button type="button" class="btn btn-danger eliminar" data-id="${producto.id}">Eliminar</button>
      </td>
      </tr>
    `;
  });
})
.catch(error => console.error(error));
