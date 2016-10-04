namespace App {
  angular.module("MyApp", []);

  class HomeController{
    //console.log('stuff');
    public dog = "stuff";
  }
  angular.module("MyApp").controller("homeController", HomeController);
}
