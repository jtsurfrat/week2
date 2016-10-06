namespace myapp.Controllers {

    export class HomeController {
        //public message = 'Hello from the home page!';
        // public price:number = 8.99;
        // public tax:number;
        // constructor(TaxService){
        //   this.tax = TaxService.calculateTax(this.price);
        // }

        public food:any[];
        public search:string;
        public fortune:string[];
        public randomFortune:string;

        constructor(RandomArray){
          this.food = ['Milk', 'Maripan', 'Mustard', 'Eggs'];
          // this.food = [
          //       { name: 'Milk', price: 2.33, dateCreated: new Date('12/31/1977') },
          //       { name: 'Marzipan', price: 99.88, dateCreated: new Date('1/8/1982') },
          //       { name: 'Mustard', price: 6.77, dateCreated: new Date('12/04/1922') },
          //       { name: 'Eggs', price: 3.44, dateCreated: new Date('12/31/1977') }
          //   ];
          this.fortune = ["You will fall in love on flag day",
                      "You will try a new shampoo product",
                      "Your puppy will bite you a quarter afternoon",
                      "Bacon is good for you",
                      "Puppies smell and cat's are grumpy"
                    ];

          this.randomFortune = RandomArray.randomArrayFun(this.fortune);
        }
    }
    //
    //
    // export class AboutController {
    //     public message = 'Hello from the about page!';
    // }

}
