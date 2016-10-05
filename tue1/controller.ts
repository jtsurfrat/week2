namespace MovieApp {
  class MovieListController {
    public movies;

    constructor(){
      this.movies = [
        {id: 1, title: 'Batman', director: 'Nolan' },
        {id: 2, title: 'Superman', director: 'Scott' },
        {id: 3, title: 'Spiderman', director: 'Wells' }
      ];

    }
  }
  angular.module("MovieApp").controller("MovieListController", MovieListController);
}
