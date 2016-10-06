namespace myapp.Services {
  class TaxService {

    // calculateTax(price){
    //   return price * 0.08;
    // }

  }
  //angular.module("myapp").service("TaxService", TaxService);

  class RandomArray {
    randomArrayFun(items){
      let item:string = items[Math.floor(Math.random()*items.length)];
      return item;
    }
  }
  angular.module("myapp").service("RandomArray", RandomArray);
}
