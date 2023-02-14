fetch('https://bsite.net/metalflap/links-group' )
.then(res => res.json())
.then(data => {
  let productos = document.getElementById("linksGroup");
  data.forEach(producto => {
    productos.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.orden}</td>
        <td>${producto.estado}</td>
      </tr>
    `;
  });
})
.catch(error => console.error(error));