var MovieApp;
(function (MovieApp) {
    var MovieListController = (function () {
        function MovieListController() {
            this.movies = [
                { id: 1, title: 'Batman', director: 'Nolan' },
                { id: 2, title: 'Superman', director: 'Scott' },
                { id: 3, title: 'Spiderman', director: 'Wells' }
            ];
        }
        return MovieListController;
    }());
    angular.module("MovieApp").controller("MovieListController", MovieListController);
})(MovieApp || (MovieApp = {}));
