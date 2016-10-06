
namespace RoutingSecurityApp {
  angular.module("RoutingSecurity", ['ui.router', 'ngResource']).config((
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider

  ) => {
    //define routes and states
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: '/ngApp/home.html'
      })
      .state('secret', {
        url: '/secret',
        templateUrl: '/ngApp/secret.html',
        data: {
          requiresAuthentication: true
        }
      })
      .state('public', {
        url: '/public',
        templateUrl: '/ngApp/public.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/ngApp/login.html'
      })
      $locationProvider.html5Mode(true);
  });
  angular.module('RoutingSecurity').run((
    $rootScope: ng.IRootScopeService,
    $state: ng.ui.IStateService,
    accountService: RoutingSecurityApp.Services.AccountService
  ) => {
    $rootScope.$on('$stateChangeStart', (e, to) => {
      if(to.data && to.data.requiresAuthentication){
        if(!accountService.isLoggedIn()) {
          e.preventDefault();
          $state.go("login");
        }
      }
    })
  })
}
