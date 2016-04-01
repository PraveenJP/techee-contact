/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.tabIndex = 0;
            this.searchText = '';
            this.users = [];
            this.selected = null;
            this.newNote = new ContactManagerApp.Note('', null);
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selected = users[0];
                self.userService.selectedUser = self.selected;
                console.log(self.users);
            });
        }
        MainController.prototype.toggleSidenav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.addUser = function ($event) {
            var _this = this;
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/view/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: ContactManagerApp.AddUserDialogCtrl,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function (user) {
                var newUser = ContactManagerApp.User.formCreate(user);
                self.users.push(newUser);
                self.selectUser(newUser);
                _this.openToast('User added successfully.');
            }, function () {
                console.log('Cancelled');
            });
        };
        MainController.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        MainController.prototype.addNote = function () {
            this.selected.notes.push(this.newNote);
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();
            this.newNote = new ContactManagerApp.Note('', null);
            this.openToast('Note added');
        };
        MainController.prototype.selectUser = function (user) {
            this.selected = user;
            this.userService.selectedUser = user;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.clearNotes = function ($event) {
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you to want to delete all notes?')
                .textContent('All notes will be deleted. You can\'t undo the action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                self.selected.notes = [];
                self.openToast('Clear notes');
            });
        };
        MainController.prototype.removeNote = function (note) {
            var findIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(findIndex, 1);
            this.openToast('Note was Removed.');
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('bottom right')
                .hideDelay(2000));
        };
        MainController.prototype.contactForm = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: 'dist/view/contactSheet.html',
                controller: ContactManagerApp.contactPanelCtrl,
                controllerAs: 'cp',
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && console.log(clickedItem.name + 'Clicked');
            });
        };
        MainController.$inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$mdBottomSheet'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map