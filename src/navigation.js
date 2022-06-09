window.addEventListener('DOMContentLoaded', navigator, false); //Escuchando el evento de contenido del DOM cargado
window.addEventListener('hashchange', navigator, false);//Escuchando el evento de cambio de extension de la pagina # 
// y Disparando la funcion navigator que filtra los cambios en la app
//Segun la ubicacion o  extensión en que se encuentre la App 
function navigator() {
  console.log({ location });
  
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }
}


function homePage() {
  console.log('Home!!');

  getTrendingMoviesPreview();
  getCategegoriesPreview();
}

function categoriesPage() {
  console.log('categories!!');
}

function movieDetailsPage() {
  console.log('Movie!!');
}

function searchPage() {
  console.log('Search!!');
}

function trendsPage() {
  console.log('TRENDS!!');
}