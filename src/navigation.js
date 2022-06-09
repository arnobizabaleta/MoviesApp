searchFormBtn.addEventListener('click', () => { //El btn de busqueda redirecciona a
    location.hash = '#search=';                 //La seccion de search
  });
  
  trendingBtn.addEventListener('click', () => { // El boton de trening redireccione a
    location.hash = '#trends';                  //Tendencias
  }); 
  
  arrowBtn.addEventListener('click', () => { //El botón de flechita redirecciona a 
    location.hash = '#home'; //Al home de la app
  });
  
  window.addEventListener('DOMContentLoaded', navigator, false);//Escuchando el evento de contenido del DOM cargado y disparando la function navigator
  window.addEventListener('hashchange', navigator, false);//Escuchando el evento de cambio de extension de la pagina #
  // y Disparando la funcion navigator que filtra las vistas según los cambios de location en la app
  //Segun la ubicacion o  extensión en que se encuentre la App 
  function navigator() {
    console.log({ location });//Print int Console the current app location 
    
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
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
  
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
  
    getTrendingMoviesPreview();
    getCategegoriesPreview();
  }
  
  function categoriesPage() {
    console.log('categories!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  }
  
  function movieDetailsPage() {
    console.log('Movie!!');
  
    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
  }
  
  function searchPage() {
    console.log('Search!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  }
  
  function trendsPage() {
    console.log('TRENDS!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  }