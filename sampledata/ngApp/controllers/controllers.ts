namespace sampledata.Controllers {
  // export class AboutController {
  //     public message = 'Hello from the about page!';
    const apiUrl = "/api/movies/search/";

    export class HomeController {
      public movies;
      public search;

      // const apiUrl = "/api/movies/search";

      fetch(){
        if(this.search){
          console.log('searching');
          this.$http.get(apiUrl + this.search)
            .then((results) => {
              this.movies = results.data
            });
        }
      }


        public message = 'Hello from the home page!';

    //
    //     constructor(movieService:sampledata.Services.MovieService) {
    //         this.movies = movieService.listMovies();
    //     }
    // }
    //
    //


    // get always you to request data from the server
    // post request adds new information to the server
    // put request: adds changes to existing information to the server
    // deletes request : deletes information
      constructor(private $http: ng.IHttpService){
      //   this.$http.get('/api/movies')
      //   .then((response) => {
      //     this.movies = response.data;
      //   })
      //   .catch(() => {
      //     console.log("Could not retrieve movies");
      //   })
      }
  }
}
