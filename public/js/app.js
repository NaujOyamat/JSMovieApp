$(document).foundation()
(function () {
  var app = angular.module('mainModule', []);

  app.controller('MovieController', function () {
    this.movie = {
      id: 0001,
      name: 'THE GODFATHER II',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story."
      releaseYear: 1987,
      grossIncome: 9458000,
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 89,
      genre: [ 'Action', 'Suspense' ]
    };
  });
})();