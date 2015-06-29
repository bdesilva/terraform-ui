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
            templateUrl: '../views/aws/form-base-resources.html',
            controller: function($scope, $state) {
                /*if (true) {
                    $state.go('form.ec2');
                } else {
                    $state.go('form.s3');
                }*/
            }
        })

        // url will be /form/payment
        .state('form.infrastructure', {
            url: '/infrastructure',
            templateUrl: '../views/aws/form-server-infrastructure.html'
        })

        // url will be /form/payment
        .state('form.dnsresolution', {
            url: '/dnsresolution',
            templateUrl: '../views/aws/form-dns-resolution.html'
        })

        // url will be /form/payment
        .state('form.uploadconfig', {
            url: '/uploadconfig',
            templateUrl: '../views/aws/form-upload-configuration.html'
        })

        .state('aws', {
            url: '/aws_ec2',
            templateUrl: '../views/aws/resources/form-base-resources-ec2.html'
        })

        .state('form.s3', {
            url: '/aws_s3',
            templateUrl: '../views/aws/resources/form-base-resources-s3.html'
        });

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
