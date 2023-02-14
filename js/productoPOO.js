class TablaProductos {
    constructor(url, tablaId) {
      this.url = url;
      this.tablaId = tablaId;
    }
  
    cargarProductos() {
      fetch(this.url)
        .then(res => res.json())
        .then(data => {
          this.pintarTabla(data);
        })
        .catch(error => console.error(error));
    }
  
    pintarTabla(data) {
      let productos = document.getElementById(this.tablaId);
      productos.innerHTML = `
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Link</th>
            <th>Stock</th>
            <th>Etiqueta</th>
            <th>Descripción</th>
            <th>ID Categoría</th>
            <th>ID Sucursal</th>
            <th>Acciones</th>
          </tr>
        </thead>
      `;
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
            <td>
        <button type="button" class="btn btn-primary editar" data-bs-toggle="modal" data-bs-target="#modalEditar" data-id="${producto.id}">Editar</button>
        <button type="button" class="btn btn-danger eliminar" data-id="${producto.id}">Eliminar</button>
      </td>
          </tr>
        `;
      });
      productos.addEventListener('click', (event) => {
        if (event.target.classList.contains('editar')) {
          let id = event.target.getAttribute('data-id');
          // Lógica para editar el producto con el id correspondiente
        } else if (event.target.classList.contains('eliminar')) {
          let id = event.target.getAttribute('data-id');
          // Lógica para eliminar el producto con el id correspondiente
        }
      });
    }
  }
  

//   // Uso de la clase
let tablaProductos = new TablaProductos('https://bsite.net/metalflap/td-producto', 'productos');
tablaProductos.cargarProductos();
  
productos.addEventListener('click', (event) => {
    if (event.target.classList.contains('editar')) {
      let id = event.target.getAttribute('data-id');
      let producto = data.find(p => p.id == id);
      document.getElementById('inputIdEditar').value = producto.id;
      document.getElementById('inputNombreEditar').value = producto.nombre;
      document.getElementById('inputPrecioEditar').value = producto.precio;
      
    } else if (event.target.classList.contains('eliminar')) {
      let id = event.target.getAttribute('data-id');
      // Lógica para eliminar el producto con el id correspondiente
    }
  });
  


// class Producto {
//     constructor(id, nombre, precio, link, stock, etiqueta, descripcion, idCategoria, idSucursal) {
//       this.id = id;
//       this.nombre = nombre;
//       this.precio = precio;
//       this.link = link;
//       this.stock = stock;
//       this.etiqueta = etiqueta;
//       this.descripcion = descripcion;
//       this.idCategoria = idCategoria;
//       this.idSucursal = idSucursal;
//     }
//   }
  
// let productos = [];

// fetch('https://bsite.net/metalflap/td-producto')
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(producto => {
//       let newProducto = new Producto(
//         producto.id,
//         producto.nombre,
//         producto.precio,
//         producto.link,
//         producto.stock,
//         producto.etiqueta,
//         producto.descripcion,
//         producto.idCategoria,
//         producto.idSucursal
//       );
//       productos.push(newProducto);
//     });
//   });

//   Finalmente, creamos la tabla usando un ciclo for para recorrer el arreglo de productos y mostrar los datos en cada fila de la tabla: