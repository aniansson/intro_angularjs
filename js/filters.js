(function () {
    'use strict';
    angular
      .module("demoApp")
      .filter('sortByLastName', sortByLastName);

    function sortByLastName() {
        return function (array) {
          function compare(a, b) {
            return a.lastName.localeCompare(b.lastName)
          }
          return array.sort(compare);
          }
    }
})();
