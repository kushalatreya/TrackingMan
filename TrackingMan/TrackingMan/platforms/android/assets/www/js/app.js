// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('signin', {
        url: '/signin',
        templateUrl: 'templates/confirm_account.html',
        controller: 'SignCtrl'
    })

    .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl',
        params: {
            userfname: null,
            userlname: null
        }
    })

    .state('settings', {
        url: '/main/settings',
        templateUrl: 'templates/settings.html',
        controller: 'SetCtrl'
    })

    .state('time_logs', {
        url: '/main/time_logs',
        templateUrl: 'templates/time-logs.html',
        controller: 'LogCtrl'
    })

    .state('privacy_policy', {
        url: '/privacy_policy',
        templateUrl: 'templates/privacy-policy.html',
        controller: 'SignCtrl'
    });

    $urlRouterProvider.otherwise('/signin');
});
