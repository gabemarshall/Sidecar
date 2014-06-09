'use strict';

//Setting up route
angular.module('mean.auth').config(['$stateProvider',
    function($stateProvider) {
        // Check if the user is not conntected
        var checkLoggedOut = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0') {
                    $timeout(deferred.reject);
                    $location.url('/login');
                }

                // Not Authenticated
                else $timeout(deferred.resolve);
            });

            return deferred.promise;
        };

        // states for my app
        $stateProvider
            .state('auth.login', {
                url: '/login',
                templateUrl: 'public/auth/views/login.html',
                resolve: {
                    loggedin: checkLoggedOut
                }
            })
            .state('auth.register', {
                url: '/register',
                templateUrl: 'public/auth/views/register.html',
                resolve: {
                    loggedin: checkLoggedOut
                }
            })
            .state('dashboard', {
            	url: '/dashboard',
            	templateUrl: 'public/auth/views/dashboard/index.html'
            })
            .state('projects', {
            	url: '/projects',
            	templateUrl: 'public/auth/views/projects/index.html'
            })
            .state('clients', {
            	url: '/clients',
            	templateUrl: 'public/auth/views/clients/index.html'
            })
            .state('documents', {
            	url: '/documents',
            	templateUrl: 'public/auth/views/documents/index.html'
            })
            .state('invoices', {
            	url: '/invoices',
            	templateUrl: 'public/auth/views/invoices/index.html'
            })
            .state('reports', {
            	url: '/reports',
            	templateUrl: 'public/auth/views/reports/index.html'
            })
            .state('leads', {
            	url: '/leads',
            	templateUrl: 'public/auth/views/leads/index.html'
            });
    }
]);
