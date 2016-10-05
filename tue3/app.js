var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ui.router"]).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state("Home", {
            url: '/',
            templateUrl: "/ngApp/product.html",
            controller: MyApp.Controllers.ProductListController,
            controllerAs: "controller"
        })
            .state("Details", {
            url: '/details/:id',
            templateUrl: "/ngApp/detail.html",
            controller: MyApp.Controllers.ProductDetailsController,
            controllerAs: "controller"
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
