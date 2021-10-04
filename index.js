function search() {
  //Guardo la key en una variable.
  const Nasa_api = "sAHEZfKbERLuQxx26A8eYFLD3FTBlADkEDeWNkJZ";
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const fechaABuscar = e.target.buscar.value;
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${Nasa_api}` +
        "&date=" +
        fechaABuscar
    )
      .then((response) => response.json())
      .then((data) => mostrarResultados(data));
  });
}

function mostrarResultados(results) {
  const contenedor = document.querySelector(".results");
  const template = document.querySelector("#item-template");
  const titulo = template.content.querySelector(".title");
  titulo.textContent = results.title;
  const fecha = template.content.querySelector(".date");
  fecha.textContent = results.date;
  const descripcion = template.content.querySelector(".description");
  descripcion.textContent = results.explanation;
  const imagen = template.content.querySelector(".img-universe");
  imagen.src = results.url;
  const clone = document.importNode(template.content, true);
  if (contenedor.firstElementChild !== null) {
    contenedor.removeChild(contenedor.firstElementChild);
  }
  contenedor.appendChild(clone);
}

function main() {
  search();
}

main();
