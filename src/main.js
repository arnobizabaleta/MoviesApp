async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();
  
    const movies = data.results;
    movies.forEach(movie => {
        //Seleccionando al elemento con clase .trendingPreview-movieList dentro del elemento con id #trendingPreview
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
      
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
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  }
  
  getTrendingMoviesPreview();