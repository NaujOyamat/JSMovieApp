function convertToMatrix (movies) {
  var moviesMatrix = [];
  if (movies) {
    var cols = 0, rows = 0, i = 0, length = movies.length;
    for (i = 0; i < length; i++) {
      if (cols < 4) {
        if (!moviesMatrix[rows])
          moviesMatrix[rows] = [];

        moviesMatrix[rows].push(movies[i]);
        cols++;
      } else {
        cols = 1;
        rows++;
        moviesMatrix[rows] = [ movies[i] ];
      }
    }
  }

  return moviesMatrix;
};

(function (){
  $(document).foundation();

  var app = angular.module('MainModule', [
    'ngRoute',
    'MainModule.controllers',
    'MainModule.filters'
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