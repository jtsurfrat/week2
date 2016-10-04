var App;
(function (App) {
    angular.module("MyApp", []);
    var HomeController = (function () {
        function HomeController() {
            this.color = "green";
        }
        HomeController.prototype.pickColor = function (color) {
            this.color = color;
        };
        HomeController.prototype.addNumbers = function (x, y) {
            this.anwser = x + y;
        };
        HomeController.prototype.subNumbers = function (x, y) {
            this.anwser = x - y;
        };
        HomeController.prototype.multNumbers = function (x, y) {
            this.anwser = x * y;
        };
        HomeController.prototype.divNumbers = function (x, y) {
            this.anwser = x / y;
        };
        HomeController.prototype.modNumbers = function (x, y) {
            this.anwser = x % y;
        };
        return HomeController;
    }());
    angular.module("MyApp").controller("homeController", HomeController);
})(App || (App = {}));
