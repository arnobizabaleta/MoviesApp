const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
    },
  });
async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    //Solucionando problema de repeticion de datos por re-carga de una section
    trendingMoviesPreviewList.innerHTML = ""; //Limipiando el contenedor de las peliculas en tendencia
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
      trendingMoviesPreviewList.appendChild(movieContainer);
    });
  }

  async function getCategegoriesPreview() {
    const { data } = await api('genre/movie/list');
    const categories = data.genres;
    //Solucionando problema de repeticion de datos por re-carga de una section
      categoriesPreviewList.innerHTML = ""; //Limipiando el contenedor de las categorias
                                            //Por cada vez q  se invoca la funcion getCa...
      categories.forEach(category => {
     
      
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', 'id' + category.id);
      const categoryTitleText = document.createTextNode(category.name);
  
      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      categoriesPreviewList.appendChild(categoryContainer);
    });
  }
  
