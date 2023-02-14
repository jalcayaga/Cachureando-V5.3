
document.getElementById("formSucursal").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sucursal = {};
    for (const [key, value] of formData.entries()) {
      sucursal[key] = value;
    }
    fetch('https://bsite.net/metalflap/td-sucursal', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sucursal)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
  