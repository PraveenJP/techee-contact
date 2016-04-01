/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var contactPanelCtrl = (function () {
        function contactPanelCtrl(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Google+', icon: 'google' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Hangout', icon: 'hangout' },
                { name: 'Phone', icon: 'phone' }
            ];
            this.user = userService.selectedUser;
        }
        contactPanelCtrl.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
        };
        contactPanelCtrl.$inject = ['userService', '$mdBottomSheet'];
        return contactPanelCtrl;
    }());
    ContactManagerApp.contactPanelCtrl = contactPanelCtrl;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=contactPanelCtrl.js.map