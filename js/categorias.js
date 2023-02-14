fetch('https://bsite.net/metalflap/td-categoria')
.then(res => res.json())
.then(data => {
  let productos = document.getElementById("categorias");
  data.forEach(producto => {
    productos.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
      </tr>
    `;
  });
})
.catch(error => console.error(error));