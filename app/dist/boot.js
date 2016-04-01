/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    angular.module('ContactManagerApp', ['ngMaterial', 'ngMdIcons', 'ngMessages'])
        .service('userService', ContactManagerApp.UserService)
        .controller('mainController', ContactManagerApp.MainController)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon('google', './assets/svg/google_plus.svg', 512)
            .icon('hangout', './assets/svg/hangouts.svg', 512)
            .icon('twitter', './assets/svg/twitter.svg', 512)
            .icon('phone', './assets/svg/phone.svg', 512)
            .icon('menu', './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default').primaryPalette('blue', {
            'default': '400',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': 'A100'
        }).accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map