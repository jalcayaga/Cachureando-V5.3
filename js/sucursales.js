fetch('https://bsite.net/metalflap/td-sucursal')
.then(res => res.json())
.then(data => {
  let productos = document.getElementById("sucursales");
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