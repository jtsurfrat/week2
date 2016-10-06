var RoutingSecurityApp;
(function (RoutingSecurityApp) {
    var Services;
    (function (Services) {
        var AccountService = (function () {
            function AccountService() {
            }
            AccountService.prototype.isLoggedIn = function () {
                return false;
            };
            return AccountService;
        }());
        Services.AccountService = AccountService;
        angular.module('RoutingSecurity').service("accountService", AccountService);
    })(Services = RoutingSecurityApp.Services || (RoutingSecurityApp.Services = {}));
})(RoutingSecurityApp || (RoutingSecurityApp = {}));
