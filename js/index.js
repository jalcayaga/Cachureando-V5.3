
  fetch('https://bsite.net/metalflap/td-producto/idCategoria/118')
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al buscar productos");
      }
      return response.json();
    })
    .then(data => {
      const listaProductos = document.getElementById("listaProductos");
      listaProductos.innerHTML = "";

      data.forEach(producto => {
        const card = `
          <div class="col-4 mb-4">
            <div class="card">
              <img src="${producto.link}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
              </div>
            </div>
          </div>
        `;
        listaProductos.innerHTML += card;
      });
    })
    .catch(error => {
      console.error(error);
    });

