namespace myapp.Controllers {
// controller
    export class HomeController {
        public showModal(animalName:string){
          this.$uibModal.open({
            templateUrl: '/ngApp/dialog.html',
            controller: 'DialogController',
            controllerAs: 'modal',
            resolve: {
              animalName: () => animalName
            },
            size: 'sm'
          });
        }

        constructor(private $uibModal: angular.ui.bootstrap.IModalService){

        }

    }

    export class DialogController {
      public ok() {
        this.$uibModalInstance.close();
      }

      constructor(public animalName:string, private $uibModalInstance:
        angular.ui.bootstrap.IModalServiceInstance){

      }
    }

angular.module("myapp").controller("HomeController", HomeController);
angular.module("myapp").controller("DialogController", DialogController);



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
