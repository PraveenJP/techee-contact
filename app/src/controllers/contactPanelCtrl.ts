/// <reference path="../_all.ts" />

module ContactManagerApp{
    export class contactPanelCtrl {
        static $inject = ['userService','$mdBottomSheet'];
        
        constructor(
            private userService: IUserService,
            private $mdBottomSheet){
            this.user = userService.selectedUser;
        }
        
        user: User;
        
        actions = [
            {name:'Google+',icon:'google'},
            {name:'Twitter',icon:'twitter'},
            {name:'Hangout',icon:'hangout'},
            {name:'Phone',icon:'phone'}
        ];
        
        submitContact(action): void {            
            this.$mdBottomSheet.hide(action);
        }
    }
}