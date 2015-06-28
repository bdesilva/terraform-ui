/**
 * Created by bdesilva on 15-06-27.
 */
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: '../views/form.html',
            controller: 'formController'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: '../views/form-profile.html'
        })

        // url will be /form/interests
        .state('form.resources', {
            url: '/resources',
            templateUrl: '../views/form-base-resources.html'
        })

        // url will be /form/payment
        .state('form.infrastructure', {
            url: '/infrastructure',
            templateUrl: '../views/form-server-infrastructure.html'
        })

        // url will be /form/payment
        .state('form.dnsresolution', {
            url: '/dnsresolution',
            templateUrl: '../views/form-dns-resolution.html'
        })

        // url will be /form/payment
        .state('form.uploadconfig', {
            url: '/uploadconfig',
            templateUrl: '../views/form-upload-configuration.html'
        })

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };

});
