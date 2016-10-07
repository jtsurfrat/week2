namespace resource.Services {

    // export class MovieService {
    //     private MovieResource;
    //
    //     public listMovies() {
    //         return this.MovieResource.query();
    //     }
    //
    //     constructor($resource: ng.resource.IResourceService) {
    //         this.MovieResource = $resource('/api/movies');
    //     }
    // }
    // angular.module('resource').service('movieService', MovieService);
    // export class MyService {
    //
    // }
    // angular.module('resource').service('myService', MyService);

    export class MovieService {
      public MovieResource;

      public listMovies(){
        return this.MovieResource.query();
      }

      public saveMovies(movie){
        return this.MovieResource.save(movie).$promise;
      }

      public getMovie(movieId){
        return this.MovieResource.get({id: movieId});
      }

      public deleteMovie(movieId){
        return this.MovieResource.delete({id: movieId}).$promise;
      }

      constructor($resource: ng.resource.IResourceService){
        this.MovieResource = $resource('/api/movies/:id');
        }
      }
      angular.module('resource').service("movieService", MovieService);


      export class GuestService {
        public GuestResource;

        public listGuess(){
          return this.GuestResource.query();
        }

        public saveGuest(guest){
          return this.GuestResource.save(guest).$promise;
        }

        public getGuest(guestId){
          return this.GuestResource.get({id: guestId});
        }

        public deleteGuest(guestId){
          return this.GuestResource.delete({id: guestId}).$promise;
        }

        constructor($resource: ng.resource.IResourceService){
          this.GuestResource = $resource('/api/guestbook/:id')
        }

      }
      angular.module('resource').service("guestService", GuestService);
    }



    //this.MovieResource = $resource('/api/guestbook/:id');
