(function () {

  angular.module('MainModule.controllers', [])

  .controller('MovieController', function () {
    var localStorage = window.localStorage;

    this.getMovies = function () {
      // var movies = localStorage.getItem('movies');
      // if (!movies) {
      //   movies = [];
      // } else {
      //   movies = JSON.parse(movies);
      // }

      var movies = localMovies;

      return movies;
    };

    this.setMovie = function (movie) {
      var movies = this.getMovies();
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
    };

    this.searchString = "";

    this.listMovies = convertToMatrix(this.getMovies());
  });

  var localMovies = [
    {
      id: 1,
      name: 'THE GODFATHER II',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'godfather2.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 89,
      genre: [ 'Action', 'Suspense' ]
    },
    {
      id: 2,
      name: 'SAVING PRIVATE RYAN',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'savingprivateryan.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 64,
      genre: [ 'Action', 'Suspense' ]
    },
    {
      id: 3,
      name: 'THE BUTTERFLY EFFECT',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'butterflyeffect.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 43,
      genre: [ 'Action', 'Suspense' ]
    },
    {
      id: 4,
      name: 'FIGHT CLUB',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'fightclub.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 21,
      genre: [ 'Action', 'Suspense' ]
    },
    {
      id: 5,
      name: 'THE GODFATHER',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'godfather1.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 21,
      genre: [ 'Action', 'Suspense' ]
    },
    {
      id: 6,
      name: 'BETTER CALL SAUL',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'bettercallsaul.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 19,
      genre: [ 'Action', 'Suspense' ]
    },
    {
      id: 7,
      name: 'STREET FIGHTER V',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'streetfighter.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 17,
      genre: [ 'Action', 'Suspense' ]
    },
    {
      id: 8,
      name: 'BLACK ADDER',
      synopsis: "James Franco start in this new series as an adaptation of the King's time travel glorious story.",
      releaseYear: 1987,
      grossIncome: 9458000,
      imageUrl: 'blackadder.png',
      actors: [ 'Alpachino', 'Other'],
      director: 'SomeOne',
      rating: 5,
      genre: [ 'Action', 'Suspense' ]
    }];
})();