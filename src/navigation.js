searchFormBtn.addEventListener('click', () => { //El btn de busqueda redirecciona a
    //searchFormInput.value: Valor de busqueda de los users
    location.hash = '#search=' + searchFormInput.value;                 //La seccion de search
    
  });
  
  trendingBtn.addEventListener('click', () => { // El boton de trening redireccione a
    location.hash = '#trends';                  //Tendencias
  }); 
  
   
  //En la funcion donde manejamos el evento click de arrowBtn ya no ponemos
    // que nos devuelva a ‘#home’, sino a la URL que estuvimos anteriormente.
    //Esto se logra mediante window.history que tiene
    //varios métodos y entre ellos ‘back()’ que nos
    //permite ir a la URL anterior que visito el usuario.
  arrowBtn.addEventListener('click', () => { //El botón de flechita redirecciona a 
    //location.hash = '#home'; //Al home de la app
    location.hash = window.history.back();
   
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

    document.body.scrollTop = 0; //Asegurando que al cambiar de location.hash
    document.documentElement.scrollTop = 0;//La nueva vista siempre se comience en lo más alto
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
    getCategoriesPreview();
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
    
    const [_, categoryData] = location.hash.split('='); // =>["#category","id_category-name"], =:criterio de Separación
    //const urlPage = url[0]; No es necesario
    //const urlInfo = url[1];
    const [categoryId, categoryName] = categoryData.split("-");
    //=>["categoryId","categoryName"]
    
    headerCategoryTitle.innerText = categoryName; //Titulo nombre la categoria
    getMoviesByCategory(categoryId);//La funcion recibe el id de la categoria com param
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
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // =>["#search","searchValue"], =:criterio de Separación
    const [_, searchValue] = location.hash.split('='); 
    //searchValue = query = ConsultaDelusuario
    getMoviesBySearch(searchValue);
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