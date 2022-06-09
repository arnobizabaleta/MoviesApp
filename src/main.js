const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
    },
  });

  //Utils
  function createMovies(movies, container){
    //Solucionando problema de repeticion de datos por re-carga de una section
    container.innerHTML = ""; //Limpiando el movieContainer

    movies.forEach(movie => { //Por cada pelicula
        
        
        
      
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container'); // Agrengando clase a movieContainer
  
      const movieImg = document.createElement('img');
      movieImg.classList.add('movie-img');
      movieImg.setAttribute('alt', movie.title);//Definiendo atributo alt de movieImg
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );
  
      movieContainer.appendChild(movieImg);
      container.appendChild(movieContainer);
    });
  }

  function createCategories(categories,container){
     //Solucionando problema de repeticion de datos por re-carga de una section
     container.innerHTML = ""; //Limpiando el MainContainer of CATEGORIES

     categories.forEach(category => {
     
      
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', 'id' + category.id);
      categoryTitle.addEventListener('click', ()=>{ //Al darle click al titulo de una categoria
        location.hash = `#category=${category.id}-${category.name}`; //Cambiar la extensión y vista de la app a category
      });
      const categoryTitleText = document.createTextNode(category.name);
  
      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      container.appendChild(categoryContainer);
    });
  }
  //LLamados a la API
async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    
    createMovies(movies, trendingMoviesPreviewList);
    
    
  }

  async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');
    const categories = data.genres;
       
     createCategories(categories,categoriesPreviewList);
     
      

  }

  async function getMoviesByCategory(id) {
    const { data } = await api('/discover/movie',{
      params:{
        with_genres: id,
      }
    });
    const movies = data.results;

    createMovies(movies, genericSection);
        
  }
  
  async function getMoviesBySearch(searchValue){ //searchValue:Query
    const { data } = await api('search/movie',{
      params: { 
        query: searchValue
      }
    });
    const movies = data.results;
    
    createMovies(movies, genericSection);
  }

  async function getTrendingMovies() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    
    createMovies(movies, genericSection);
    
    
  }
