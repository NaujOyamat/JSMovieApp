(function (){
  $(document).foundation();

  var app = angular.module('MainModule', [
    'ngRoute',
    'MainModule.controllers'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MovieController',
        controllerAs: 'mvCtrl'
      })
  }])

})();