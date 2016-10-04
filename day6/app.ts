namespace App {
  //angular module
  angular.module("MyApp", []);

  //angular.module("MyControllers", []);

// define the HomeController class
  class HomeController {
    // defining a public field
    //public message = "Welcome";
    //public friends;
    //public cars;
    public add;
    public number1;
    public number2;
    public anwser;
    public color = "green";

    pickColor(color){
      this.color = color;
    }
    addNumbers(x,y){
      this.anwser = x + y;
    }
    subNumbers(x,y){
      this.anwser = x - y;
    }
    multNumbers(x,y){
      this.anwser = x * y;
    }

    divNumbers(x,y){
      this.anwser = x / y;
    }

    modNumbers(x,y){
      this.anwser = x % y;
    }

    constructor(){
      // this.friends = ['Cartman', "Kyle", "Timmy", "Stan", "Kenny"];
      // this.cars = [
      //   { year: 1989, make: "VW", model: "Fox"},
      //   { year: 1988, make: "VW", model: "TFox"}
      // ];
    }
  }
  // Add HomeController class to the controller while nameing it HomeController
  angular.module("MyApp").controller("homeController", HomeController);
}

// homework make caluclator with angular, takes two pr
