namespace upload.Controllers {

    export class HomeController {
        public file;

        public pickFile(){
          this.filepickerService.pick(
            {minetype: 'image/*'},
            this.fileUploaded.bind(this)
          )
        }

        public fileUploaded(file){
          this.file = file;
          this.$scope.$apply();
        }

        constructor(private filepickerService, private $scope: ng.IScope){
        }
    }
angular.module("upload").controller("HomeController", HomeController);


























    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
