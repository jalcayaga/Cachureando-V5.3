
document.getElementById("formProducto").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const producto = {};
    for (const [key, value] of formData.entries()) {
      producto[key] = value;
    }
    fetch("https://bsite.net/metalflap/td-producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(producto)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
  