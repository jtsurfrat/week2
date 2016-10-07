namespace resource.Controllers {

    export class MoviesListController {
      public movies;
      constructor(movieService: resource.Services.MovieService){
        this.movies = movieService.listMovies();
      }
    }
    export class MoviesAddController {
      public movieToCreate;

      addMovie(){
        this.movieService.saveMovies(this.movieToCreate).then(() => {
          this.$state.go("home")
        });
      }

      constructor(private movieService: resource.Services.MovieService,
        private $state:ng.ui.IStateService){

      }
    }
    export class MoviesEditController {
      public movieToEdit;

      editMovie (){
        this.movieService.saveMovies(this.movieToEdit).then(
          () => this.$state.go("home")
        )
      }
      constructor(private movieService: resource.Services.MovieService,
        private $state: ng.ui.IStateService,
        $stateParams: ng.ui.IStateParamsService){
          this.movieToEdit = movieService.getMovie($stateParams['id'])
      }
    }

    export class MoviesDeleteController {
      public movieToDelete;

      deleteMovie(){
        this.movieService.deleteMovie(this.movieToDelete.id).then(() => {
          this.$state.go("home");
        });
      }

      constructor(private movieService: resource.Services.MovieService,
        private $state: ng.ui.IStateService,
        $stateParams: ng.ui.IStateParamsService){
          this.movieToDelete = movieService.getMovie($stateParams['id'])
      }
    }
    export class GuessBookListController {
      public guests;
      constructor(guestService: resource.Services.GuestService){
        this.guests = guestService.listGuess();
      }
    }

  // }
  export class GuessBookAddController {
    public createGuest;

    addGuest(){
      this.guestService.saveGuest(this.createGuest).then(() => {
        this.$state.go("guessbook");
      });
    }
    constructor(private guestService: resource.Services.GuestService,
      private $state:ng.ui.IStateService){
    }
  }
  export class GuessBookEditController {
    public guestToEdit;

    editGuest(){
      this.guestService.saveGuest(this.guestToEdit).then(
        () => this.$state.go("guestbook")
      )
    }
    constructor(private guestService: resource.Services.GuestService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService){
        this.guestToEdit = guestService.getGuest($stateParams['id'])
      }
  }
  export class GuessBookDeleteController {
    public guestToDelete;

    deleteGuest2(){
      this.guestService.deleteGuest(this.guestToDelete.id).then(() => {
        this.$state.go("guestbook");
      })
    }
    constructor(private guestService: resource.Services.GuestService,
      private $state: ng.ui.IStateService,
      $stateParams: ng.ui.IStateParamsService){
        this.guestToDelete = guestService.getGuest($stateParams['id']);
  }
}
