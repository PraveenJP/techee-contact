/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogCtrl = (function () {
        function AddUserDialogCtrl($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = [
                'svg-1', 'svg-2', 'svg-3', 'svg-4'
            ];
        }
        AddUserDialogCtrl.prototype.save = function () {
            this.$mdDialog.hide(this.user);
        };
        AddUserDialogCtrl.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogCtrl.$inject = ['$mdDialog'];
        return AddUserDialogCtrl;
    }());
    ContactManagerApp.AddUserDialogCtrl = AddUserDialogCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=addUserDialogCtrl.js.map