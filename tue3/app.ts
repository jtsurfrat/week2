namespace MyApp {
  angular.module("MyApp", ["ui.router"]).config((
    $stateProvider:ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
) => {
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
    })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
