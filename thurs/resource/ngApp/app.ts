namespace resource {

    angular.module('resource', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: "/ngApp/views/list.html",
            controller: resource.Controllers.MoviesListController,
            controllerAs: "controller"
          })
          .state('Add', {
            url: '/add',
            templateUrl: "/ngApp/views/add.html",
            controller: resource.Controllers.MoviesAddController,
            controllerAs: "controller"
          })
          .state('Edit', {
            url: '/edit/:id',
            templateUrl: "/ngApp/views/edit.html",
            controller: resource.Controllers.MoviesEditController,
            controllerAs: "controller"
          })
          .state('Delete', {
            url: '/delete/:id',
            templateUrl: "/ngApp/views/delete.html",
            controller: resource.Controllers.MoviesDeleteController,
            controllerAs: "controller"
          })
          .state('guessbook', {
            url: '/guessbook',
            templateUrl: '/ngApp/views/guessbook.html',
            controller: resource.Controllers.GuessBookListController,
            controllerAs: "controller"
          })
          .state('addguest', {
            url: '/guessbook/addguest',
            templateUrl: '/ngApp/views/addguest.html',
            controller: resource.Controllers.GuessBookAddController,
            controllerAs: "controller"
          })
          .state('editguest', {
            url: '/guessbook/editguest/:id',
            templateUrl: '/ngApp/views/editguest.html',
            controller: resource.Controllers.GuessBookEditController,
            controllerAs: "controller"
          })
          .state('deleteguest', {
            url: '/guessbook/deleteguest/:id',
            templateUrl: '/ngApp/views/deleteguest.html',
            controller: resource.Controllers.GuessBookDeleteController,
            controllerAs: "controller"
          })



















            // .state('home', {
            //     url: '/',
            //     templateUrl: '/ngApp/views/home.html',
            //     controller: resource.Controllers.HomeController,
            //     controllerAs: 'controller'
            // })

            // .state('about', {
            //     url: '/about',
            //     templateUrl: '/ngApp/views/about.html',
            //     controller: resource.Controllers.AboutController,
            //     controllerAs: 'controller'
            // })
            // .state('notFound', {
            //     url: '/notFound',
            //     templateUrl: '/ngApp/views/notFound.html'
            // });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
