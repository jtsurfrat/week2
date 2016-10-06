namespace myapp.Filters {
  function startsWith(){
    return function (input:string[], expression:string){
      expression = expression.toLowerCase();
      return input.filter((item:string) => {
        return item.toLowerCase().indexOf(expression, 0) == 0;
      });
    }
  }
  angular.module("myapp").filter("startsWith", startsWith);
}
//myAppIHateApple22
