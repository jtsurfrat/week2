var RoutingSecurityApp;
(function (RoutingSecurityApp) {
    angular.module("RoutingSecurity", ['ui.router', 'ngResource']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
        });
        $locationProvider.html5Mode(true);
    });
    angular.module('RoutingSecurity').run(function ($rootScope, $state, accountService) {
        $rootScope.$on('$stateChangeStart', function (e, to) {
            if (to.data && to.data.requiresAuthentication) {
                if (!accountService.isLoggedIn()) {
                    e.preventDefault();
                    $state.go("login");
                }
            }
        });
    });
})(RoutingSecurityApp || (RoutingSecurityApp = {}));
