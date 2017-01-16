(function () {
    'use strict';
    angular
        .module("demoApp")
        .service('userService', userService);

    function userService() {
        var collection = [
            {firstName: 'Philip', lastName: 'Zudemberg'},
            {firstName: 'Ebba', lastName: 'Aniansson'},
            {firstName: 'Kristoffer', lastName: 'Karlsson'},
            {firstName: 'Rodrigo', lastName: 'Munoz'},
        ];
        return {
            users: function () {
              return collection;
            },
            add: function (object) {
              collection.push(object);
            }
        }
    }
  })();
