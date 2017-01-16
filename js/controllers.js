(function () {
    'use strict';
    angular
      .module("demoApp")
      .controller("mainController", mainController); //function($scope, userService) {

    function mainController($scope, userService) {
        $scope.users = userService.users();
        $scope.newUser = {}
        $scope.addUser = function () {
          userService.add($scope.newUser);
        // $scope.newUser = {}
        };
    });
})();
