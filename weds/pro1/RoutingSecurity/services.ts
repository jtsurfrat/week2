namespace RoutingSecurityApp.Services {
  export class AccountService {
    public isLoggedIn(){
      return false;
    }
  }
  angular.module('RoutingSecurity').service("accountService", AccountService);
}
