
document.getElementById("formCategoria").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const categoria = {};
    for (const [key, value] of formData.entries()) {
      categoria[key] = value;
    }
    fetch('https://bsite.net/metalflap/td-categoria', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(categoria)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
  