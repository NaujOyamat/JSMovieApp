(function () {
  angular.module('MainModule.filters', [])

  .filter('searchFor', function () {
    return function (arr, searchString) {
      if (!searchString) {
        return arr;
      }
      var result = [];
      searchString = searchString.toLowerCase();
      angular.forEach (arr, function (row) {
        angular.forEach (row, function (col) {
          if(col.name.toLowerCase().indexOf(searchString) !== -1){
            result.push(col);
          }
        });
      });

      return convertToMatrix(result);
    };
  });
})();