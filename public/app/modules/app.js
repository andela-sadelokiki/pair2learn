'use strict';

var app = angular.module('pairToLearnApp',['ngRoute','ngMessages']);
  app.config(['$routeProvider', '$httpProvider', function($routeProvider,  $httpProvider){

    $routeProvider
      .when('/home', {
        templateUrl: 'app/views/home.view.html',
        controller: 'HomeCtrl'
      })
      .when('/success', {
        templateUrl: 'app/views/success.view.html',
        controller: 'HomeCtrl'
      })
      .when('/confirm', {
        templateUrl: 'app/views/confirm.view.html',
        controller: 'HomeCtrl'
      })
      .when('/user/:id', {
        templateUrl: 'app/views/Userpage.view.html',
        controller: 'UserCtrl'
      }) 
      .when('/php/experts', {
        templateUrl: 'app/views/Expertpage.view.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'app/views/login.view.html',
        controller: 'SignCtrl'
      })
      .when('/signup', {
        templateUrl: 'app/views/signup.view.html',
        controller: 'SignCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });

    $httpProvider.interceptors.push(['$q', '$location', '$window', '$rootScope',
        function($q, $location, $window, $rootScope) {
          return {
            'request': function (config) {
                var querytoken = $location.search().token;
                $location.search('token', null);
                if(!$window.sessionStorage.token && querytoken){
                    Materialize.toast('You are sigined in!', 4000);
                    $window.sessionStorage.token = querytoken;
                }
                if ($window.sessionStorage.token ||  querytoken) {
                    config.headers.Authorization = $window.sessionStorage.token || querytoken;
                }
                return config;
              },

            'responseError': function(rejection) {
                console.log('response error', rejection)
               if(rejection.status === 401 || rejection.status === 403) {
                  $window.location.href = '#/signin';
                }
                return $q.reject(rejection);
            }
          };
      }]);
  }])
  
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.hideFeatures = true;

  }]);


