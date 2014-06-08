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
                    templateUrl: 'public/system/views/home/index.html'
                })
                .state('about', {
                	url: '/about',
                	templateUrl: 'public/system/views/home/about.html'
                })
                .state('features', {
                	url: '/features',
                	templateUrl: 'public/system/views/home/features.html'
                })
                .state('pricing', {
                	url: '/pricing',
                	templateUrl: 'public/system/views/home/pricing.html'
                })
                .state('projects', {
                	url: '/projects',
                	templateUrl: 'public/system/views/projects/index.html'
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


