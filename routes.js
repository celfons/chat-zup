angular.module("app").config(function($routeProvider) {

    $routeProvider
    .when('/', {
      templateUrl : 'home.html',
      controller : 'HomeController',
      resolve: {
        "syncObject" : function(FirebaseService) {
          return FirebaseService.getPosts();
        }
      }
    })
     .when('/rh', {
      templateUrl : 'rh.html',
      controller : 'RhController',
      resolve: {
        "syncObject" : function(FirebaseService) {
          return FirebaseService.getSetor();
        }
      }
    })
   
  });
