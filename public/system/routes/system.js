'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'public/system/views/index.html'
                })
                .state('about', {
                	url: '/about',
                	templateUrl: 'public/system/views/about.html'
                })
                .state('features', {
                	url: '/features',
                	templateUrl: 'public/system/views/features.html'
                })
                .state('pricing', {
                	url: '/pricing',
                	templateUrl: 'public/system/views/pricing.html'
                })
                .state('auth', {
                    templateUrl: 'public/auth/views/index.html'
                });
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
            //$locationProvider.html5Mode(true);
        }
    ]);


