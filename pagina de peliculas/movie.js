// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const trailerURL = decodeURIComponent(params.get("trailer"));
const imageURL = decodeURIComponent(params.get("image"));
const title = decodeURIComponent(params.get("title"));
const description = decodeURIComponent(params.get("description"));

// Mostrar los detalles de la película
showMovieDetails(trailerURL, imageURL, title, description);


// Función para mostrar los detalles de la película seleccionada
function showMovieDetails(trailerURL, imageURL, title, description) {
    const movieImage = document.getElementById("movie-image");
    movieImage.src = imageURL;
  
    const trailerContainer = document.getElementById("trailer-container");
    trailerContainer.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
      <p>Trailer:</p>
      <iframe width="560" height="315" src="${trailerURL}" frameborder="0" allowfullscreen></iframe>
    `;
  }
  