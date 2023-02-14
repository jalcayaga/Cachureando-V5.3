fetch('https://bsite.net/metalflap/links')
.then(res => res.json())
.then(data => {
  let productos = document.getElementById("links");
  data.forEach(producto => {
    productos.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.link}</td>
        <td>${producto.idLinkGroup}</td>
        <td>${producto.estado}</td>
      </tr>
    `;
  });
})
.catch(error => console.error(error));