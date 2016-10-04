var App;
(function (App) {
    angular.module("MyApp", []);
    var HomeController = (function () {
        function HomeController() {
            this.dog = "stuff";
        }
        return HomeController;
    }());
    angular.module("MyApp").controller("homeController", HomeController);
})(App || (App = {}));
