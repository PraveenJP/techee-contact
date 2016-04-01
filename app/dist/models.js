/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var CreateUser = (function () {
        function CreateUser(firstname, lastname, avatar, bio) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.avatar = avatar;
            this.bio = bio;
        }
        return CreateUser;
    }());
    ContactManagerApp.CreateUser = CreateUser;
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        User.formCreate = function (user) {
            return new User(user.firstname + ' ' + user.lastname, user.avatar, user.bio, []);
        };
        return User;
    }());
    ContactManagerApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    ContactManagerApp.Note = Note;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=models.js.map